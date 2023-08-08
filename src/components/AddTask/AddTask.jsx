import {useState } from "react";
import "./AddTask.css"
const AddTask = ({user,addTask}) => {

    const [task,setTask] = useState(null);
    
    const submitTask = (e) => {
        e.preventDefault();
        if(!task) {
            alert("Not Added Any task");
            return ;
        }
        let value = {
            "id": (Math.round(1000000*Math.random())),
            "user":user,
            "task": task,
            "status": 0,
        }
        addTask(value);
        setTask(null);
    }

    return <>

    <form className="add-task-form">
        <div className="addtask-container">
            <input onChange={(e) => setTask(e.target.value)} type="text" placeholder="Enter Task" value={!task ? "" : task } />
            <button type="submit" onClick={submitTask}
            className="addtask-button">+</button>
        </div>
    </form>
    </>
}

export default AddTask;