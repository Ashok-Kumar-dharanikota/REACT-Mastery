import { useState } from 'react'
import './App.css'
import Task from './components/Task';

function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(1);

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
              <Task key={task.id} task={task}/>
          ))}
        </div>

      </div>
    </section>
  )
}

export default App
