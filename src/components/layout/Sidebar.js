import React from 'react';

import {
    FaChevronDown, 
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar
} from 'react-icons/fa'

export function Sidebar() {
    return (
        <div className="sidebar" data-testId = 'sidebar' >
            <ul>
            <li>
                <span>
                    <FaRegCalendar />
                </span> 
                <span>Inbox</span>
            </li> 
            <li><span>
                <FaRegCalendarAlt />
                </span>Today</li>
            <li>Next 7 days</li>   
            </ul>

    
    <div className="sidebar__middle">
        <span>
            <FaChevronDown />
        </span>
        <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">Projects will be taken here</ul>
    Add Project Component Here!!
        </div>
    )
}
