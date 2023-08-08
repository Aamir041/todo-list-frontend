import { useState } from "react";
import "./TaskList.css"
// import EditTask from "../EditTask/EditTask";
const TaskList = ({task,deleteTask}) => {

    const removeTask = () =>{
        deleteTask(task['id']);
    }

    // const [editPane,setEditPane] = useState(false);

    // const changeTask = (newTask) => {
    //     editTask(task.id,newTask);
    // }


    return<>
    <div className="tasklist-container">

        {/* {
            editPane 
            && 
            <EditTask
            setEditPane = {setEditPane}
            prevTask = {task.title}
            changeTask = {changeTask}
            />
        } */}

            <p className="tasklist-title">
                {task['task']}
            </p>

            <div className="tasklist-bttn-container">
                <button onClick={()=>removeTask()}  className="tasklist-del-bttn">Delete</button>
                <button className="tasklist-edit-bttn" >Edit</button>
            </div>
    </div>
    </>
}

export default TaskList;