import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [inputTask, setinputTask] = useState('');
    const [Tasks, setTasks] = useState([]);
let onChangeHandler = (e)=>{
    setinputTask(e.target.value);
    console.log(inputTask);
}

let addTask = () =>{
    if(inputTask.trim() === "")return;
    setTasks([...Tasks, {text : inputTask , isComplete : false}]);
    setinputTask('');
}

const Delete = (index) => {
    setTasks(Tasks.filter((_, i) => i !== index));
  };

const toggleComplete = (index) => {
setTasks(
    Tasks.map((task, i) =>
        i === index ? { ...task, isComplete: !task.isComplete } : task
    )
  )
   
  };
  return (
<>
<div className="container">
    <h1>TODO APP</h1>
    <div className="row">
        <input type="text" name="" id="" placeholder='Enter Task' value={inputTask} onChange={onChangeHandler} />
        <button style={{padding: '8px'}}onClick={addTask}>Add Task</button>
    </div>
    <div>
        {Tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: "20px", border:'1px solid grey', padding: '8px 5px', borderRadius: '6px'}}>
            <p id='para'
              style={{
                textDecoration: task.isComplete ? "line-through" : "none",
                fontWeight: task.isComplete ? "200" : "normal",
                display: "inline",
                marginRight: "10px",
              }}
            >
              {task.text}
            </p>
            <button style={{float: 'right'}} onClick={()=>{toggleComplete(index)}}>
             {task.isComplete ? "Undo" : "Complete"}
            </button>
            <button style={{float: 'right'}} onClick={()=>{Delete(index)}}>Delete</button>
          </div>
        ))}
      </div>
           
</div>

</>
  )
}

export default Todo