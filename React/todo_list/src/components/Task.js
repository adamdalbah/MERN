import React, {useState, useEffect} from 'react';
import Input from './Input';
const Task = (props) => {
    const [tasks, setTasks] = useState([]);
    const addTasks = (task) => {
        setTasks([...tasks, task]);
        }
    const removeTask = (index) => {
        setTasks(tasks.slice(0,index).concat(tasks.slice(index+1)));
    }

    const changeStatus= (item , index) => {
        let arr = tasks;
        if(item.status){
            arr[index].status = false;
            setTasks([...arr]);
            var element = document.getElementById(""+index);
            element.className = "abc";
        }
        else {
            arr[index].status = true;
            setTasks([...arr]);
            var element = document.getElementById(""+index);
            element.className = "ddd";
        }
    }
    
    return (
        <div>
            <Input addTasks = {addTasks}/>
            {
                tasks.map((task, index) => {
                    let x = ""+index;
                    return <div key={index}>
                        <p id={x}>{task.task}</p>
                            <label>
                                <input type="checkbox" checked={task.status} onChange={() =>{changeStatus(task, index)}}/> Is it Done?
                            </label>
                            <button onClick={()=>{removeTask(index)}}> Delete</button>
                        </div>
                })
            }
        </div>
    )
}

export default Task
