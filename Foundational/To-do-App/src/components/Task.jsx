import React, { useState } from 'react'
import check from './../assets/checked.png'
import uncheck from './../assets/unchecked.png'

const Task = ({ task }) => {


    // const deleteTask = (id) => {
    //     let filteredTasks = list.filter((item) => item.id !== id);
    //     setList(filteredTasks);
    // }

    const [done, setDone] = useState(false);


    const handleCheck = () => {
        setDone(!done);
    }




    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <img src={done ? check : uncheck} onClick={handleCheck} alt="" width={24} height={24} />
                <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.name}</p>
            </div>
            {/* <span onClick={() => deleteTask(task.id)}>x</span> */}
        </div>
    )
}

export default Task