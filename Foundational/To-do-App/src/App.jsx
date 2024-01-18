import { useState } from 'react'
import './App.css'
import check from "./assets/checked.png"
import uncheck from './assets/unchecked.png';

function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(1);
  const [done, setDone] = useState(false);

  const handleChanges = (e) => {
    setTask(e.target.value);
  }

  const createTask = () => {
    const newTask = {
      id: id,
      name: task,
      completed: false,
    }
    setList([...list, newTask]);
    setId(id + 1);
    setTask('');
  }

  const deleteTask = (id) => {
    let filteredTasks = list.filter((item) => item.id !== id);
    setList(filteredTasks);
  }

  const handleCheck = () => {
    setDone(!done);
  }

  return (
    <section className='App'>

      <div className='container'>
        <h1>Todo List</h1>

        <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
          <div style={{ display: 'flex', gap: 15 }}>
            <input className='inputfield' onChange={handleChanges} type="text" id='task-input' value={task} placeholder='Add a task...' />
            <button className='createBtn' onClick={createTask}>Create</button>
          </div>

          {list.map((task) => (
            <div key={task.id} style={{display: 'flex', justifyContent: 'space-between', gap: 20}}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <img src={done ? check : uncheck} onClick={handleCheck} alt="" width={24} height={24} />
                <p style={{textDecoration: done ? "line-through" : "none"}}>{task.name}</p>
              </div>
              <span onClick={() => deleteTask(task.id)}>x</span>
            </div>

          ))}
        </div>

      </div>
    </section>
  )
}

export default App
