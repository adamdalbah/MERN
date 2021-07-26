import React, {useState} from 'react'

const Input = (props) => {
    const [task , setTask] = useState("");
    const [status, setStatus] = useState(false);
    const addTask= (e) => {
        props.addTasks({task, status});
        e.preventDefault();
    }
    
    const handleTask = (e) => {
        setTask(e.target.value);
    }
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" onChange={handleTask}/>
                <input type="hidden" value = {false}/>
                <input type="submit" value="Add Task"/>
            </form>
        </div>
    )
}

export default Input
