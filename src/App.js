import React, {useEffect} from 'react';
import logo from './logo.svg';
import {Header} from './components/layout/Header'

import './App.css';
import Content from './components/layout/Content';

function App() {


  useEffect(() => {

  }, [])
  return (
   <div>
     <Header />
     <Content />
   </div>
  );
}

export default App;
