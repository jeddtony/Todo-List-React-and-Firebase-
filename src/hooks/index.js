import {useState, useEffect} from 'react';
import {firebase} from '../firebase';
import moment from 'moment';
import {collatedTasksExist} from '../helpers';


export const useTask = selectedProject =>{
    const [tasks, settasks] = useState([]);
    const [archivedTasks, setarchivedTasks] = useState([]);


    useEffect(() => {
        let unsubscribe = firebase.firestore().collection('tasks')
        .where('userId', '==', 'SomeRandomUserId');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject)?
            (unsubscribe = unsubscribe.where('projectId', '==' , selectedProject)) 
            : selectedProject === 'TODAY'
            ? (unsubscribe = unsubscribe.where(
                'date',
                '==',
                moment().format('DD/MM/YYYY')
            ))
            :selectedProject === 'INBOX' || selectedProject === 0
            ? (unsubscribe = unsubscribe.where('date', '==', ''))
            : unsubscribe;
        
        unsubscribe = unsubscribe.onSnapshot(snapshot=>{
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data()
            }));

            settasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    task => moment(task.date, 'DD-MM-YYYY')
                    .diff(moment(), 'days') <= 7 &&
                    task.archived !== true
                )
                : newTasks.filter(task=> task.archived !== true)
            );

            setarchivedTasks(newTasks.filter(task => task.archived !== false))
        })

        return()=> unsubscribe()
    }, [selectedProject])


    return {tasks, archivedTasks}
} 


export const useProjects = ()=>{
    const [projects, setprojects] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('projects').where('userId', '==', 'SomeRandomUserId')
        .orderBy('projectId').get().then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId: project.id, 
            }));

            if(JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setprojects(allProjects)
            }
        })
        
    }, [projects])

    return {projects, setprojects}
}