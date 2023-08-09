import "./EditTask.css"
import { useState } from "react";

const EditTask = ({setEditPane,prevTask,changeTask}) => {

    const [newTask,setNewTask] = useState(prevTask);

    const addEdit = (e) => {
        e.preventDefault();
        changeTask(newTask);
        setEditPane(false);
    }

    return(

        <div className="edit-task">

            <button
                className="edit-task-close-bttn"
                onClick={() => setEditPane(false)}
            >
                X
            </button>

            <form className="edit-task-feilds">

                <input
                    onChange={(e) => setNewTask(e.target.value)}
                    className="edit-task-input"
                    value={newTask}
                    type="text"
                />

                <button
                    className="edit-task-confirm"
                    type="submit"
                    onClick={addEdit}
                >
                    Confirm
                </button>
            </form>
        </div>
    )
}

export default EditTask;