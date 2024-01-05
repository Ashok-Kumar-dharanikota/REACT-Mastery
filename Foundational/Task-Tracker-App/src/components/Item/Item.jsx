import React, { useState } from 'react'
import style from './Item.module.css';
import check from '../../assets/check.svg'
import uncheck from '../../assets/uncheck.svg'
import save from '../../assets/save.svg'
import edit from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.svg'
import notsave from '../../assets/not-save.svg'

const Item = ({ Task }) => {

  const [task, saveTask] = useState(true);
  const [open, isOpen] = useState(true);
  const [done, setDone] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const handleNameChanges = (e) => {
    setName(e.target.value);
  }

  const handleDesChange = (e) => {
     setDescription(e.target.value);
  }

  const handleSave = () => {
    setName(name);
    setDescription(description);
    saveTask(!task);
  }

  const handleDoubleClick = () => {
    isOpen(!open);
    saveTask(false);
  }

  return (
    <div onDoubleClick={handleDoubleClick} className={style.item}>

      <img onClick={() => setDone(!done)} src={done ? check : uncheck} alt="" width={20} height={20} />

      <div style={{display: 'flex', flexDirection: 'column'}}>
        {task ?
          <input type="text" placeholder='Task name...' className={style.input} onChange={handleNameChanges} value={name} />
          : <h1>{name}</h1>
        }

        {
          task ?
            <input type="text" placeholder='description' className={style.input} onChange={handleDesChange} value={description} />
            : <p>{description}</p>
        }
      </div>


      <div style={{display: open ? 'flex' : 'none'}} className={style.options}>

        <img onClick={handleSave}  src={task ? save : notsave} alt="" width={20} height={20} />
        {/* <img  src={edit} alt="" width={20} height={20} /> */}
        <img  src={deleteIcon} alt="" width={20} height={20} />

      </div>




    </div>
  )
}

export default Item