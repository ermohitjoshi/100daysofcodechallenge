import React from 'react';
import './App.css';
import TaskHandler from './Components/TaskHandler';
import TaskRemaining from './Components/TaskRemaining';
import Task from './Components/Task';

function App() {
  return (
    <div className="App">
        <div className="title"><h1>My Todos App</h1></div>
        <TaskHandler/>
        <TaskRemaining/>
        <Task name={"sleep"}/>
        <Task name={"eat"}/>
        <Task name={"drink"}/>

    </div>
  );
}

export default App;
