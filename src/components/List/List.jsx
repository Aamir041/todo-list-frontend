import { useEffect, useState } from "react";
import "./List.css"
import { useLocation } from "react-router-dom";
import axios from "axios";
import AddTask from "../AddTask/AddTask";
import TaskList from "../../lib/TaskList";

const List = () => {

    const location = useLocation();
    const user = location?.state?.user;
    const [tasks,setTasks] = useState([]);
    const [addFlag,setAddFlag] = useState(true);

    const getTask = async() => {
        try{
            // const user = "aamir";
            const response = await axios.get(`http://localhost/todolist/gettasks.php?user=${user}`);
            setTasks(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    const addTask = async(newTask) =>{
        try{
            const response = await axios.post("http://localhost/todolist/addtask.php",newTask);
            if(response.data.status == "success"){
                console.log("added");
                // setTasks((tasks) => [newTask,...tasks]);
                setAddFlag(!addFlag);
            }
            else{
                console.log("failed");
            }
        }
        catch(error){
            console.log(error);
        }
    } 

    const deleteTask = async(id) => {
        try{
            console.log(id);
            const response = await axios.delete("http://localhost/todolist/deletetask.php",{"id":id});

            if(response.data.status === "success"){
                console.log("deleted");
                setAddFlag(!addFlag);
            }
            else{
                console.log(response?.data?.message);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
            getTask();
    },[addFlag])

    return(
        <div className="list">

            <div className="list-profile">
                <h2 className="list-greeting">Hello, {user}</h2>
            </div>

            <AddTask user={user} addTask={addTask} />

            {
                tasks.length > 0 
                ?
                tasks.map((e) => <TaskList deleteTask={deleteTask} task={e} />)
                :
                <div className="no-tasks">No task</div>

            }

        </div>
    )
}

export default List;