import React, { useState } from 'react'
import style from './Item.module.css';
import check from '../../assets/check.svg'
import uncheck from '../../assets/uncheck.svg'
import save from '../../assets/save.svg'
import edit from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.svg'
import notsave from '../../assets/not-save.svg'

const Item = ({ Task }) => {

  const [task, setTask] = useState(true);
  const [open, isOpen] = useState(true);
  const [savetask, setSaveTask] = useState(true);
  const [update, setUpdate] = useState(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  var tempName;
  var tempDesc;


  const handleNameChanges = (e) => {
    tempName = e.target.value;
  }

  const handleDesChange = (e) => {
    tempDesc = e.target.value;
  }

  const handleSave = () => {
    setName(tempName);
    setDescription(tempDesc);
    setSaveTask(!savetask);
  }

  return (
    <div onDoubleClick={() => isOpen(!open)} className={style.item}>

      <img onClick={() => setTask(!task)} src={task ? uncheck : check} alt="" width={20} height={20} />

      <div style={{display: 'flex', flexDirection: 'column'}}>
        {savetask ?
          <input type="text" placeholder='Task name...' className={style.input} onChange={handleNameChanges} value={tempName} />
          : <h1>{name}</h1>
        }

        {
          savetask ?
            <input type="text" placeholder='description' className={style.input} onChange={handleDesChange} value={tempDesc} />
            : <p>{description}</p>
        }
      </div>


      <div style={{display: open ? 'flex' : 'none'}} className={style.options}>

        <img onClick={handleSave} src={savetask ? save : notsave} alt="" width={20} height={20} />
        <img onClick={() => setUpdate(!update)} src={edit} alt="" width={20} height={20} />
        <img src={deleteIcon} alt="" width={20} height={20} />

      </div>




    </div>
  )
}

export default Item