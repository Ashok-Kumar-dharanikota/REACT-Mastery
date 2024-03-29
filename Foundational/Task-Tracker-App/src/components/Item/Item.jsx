import React, { useContext, useState } from 'react'
import style from './Item.module.css';
import check from '../../assets/check.svg'
import uncheck from '../../assets/uncheck.svg'
import save from '../../assets/save.svg'
import deleteIcon from '../../assets/delete.svg'
import notsave from '../../assets/not-save.svg'
import { context } from '../../App';

const Item = ({ Task }) => {

  // const [task, saveTask] = useState(true);
  // const [open, isOpen] = useState(true);
  // const [done, setDone] = useState(false)

  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");


  // const handleNameChanges = (e) => {
  //   setName(e.target.value);
  // }

  // const handleDesChange = (e) => {
  //    setDescription(e.target.value);
  // }

  // const handleSave = () => {
  //   setName(name);
  //   setDescription(description);
  //   saveTask(!task);
  // }

  // const handleDoubleClick = () => {
  //   isOpen(!open);
  //   saveTask(false);
  // }

  const [store, setStore] = useContext(context);
  


  return (
    <div /*onDoubleClick={handleDoubleClick} */ className={style.item}>

      <img /* onClick={() => setDone(!done)} */ src={uncheck} alt="" width={20} height={20} />

      <div style={{display: 'flex', flexDirection: 'column'}}>
        {Task.status == 'NS' ?
          <input type="text" placeholder='Task name...' className={style.input} /* onChange={handleNameChanges} */ value={Task.title} />
          : <h1>{Task.title}</h1>
        }

        {
          Task.status == 'NS' ?
            <input type="text" placeholder='description' className={style.input} /* onChange={handleDesChange} */ value={Task.desc} />
            : <p>{Task.desc}</p>
        }
      </div>


      <div style={{display: open ? 'flex' : 'none'}} className={style.options}>

        <img /* onClick={handleSave} */ src={save} alt="" width={20} height={20} />
        {/* <img  src={edit} alt="" width={20} height={20} /> */}
        <img  src={deleteIcon} alt="" width={20} height={20} />

      </div>




    </div>
  )
}

export default Item