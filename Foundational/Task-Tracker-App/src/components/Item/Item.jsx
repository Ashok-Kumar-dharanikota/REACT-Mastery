import React, { useState } from 'react'
import style from './Item.module.css';
import check from '../../assets/check.svg'
import uncheck from '../../assets/uncheck.svg'
import save from '../../assets/save.svg'
import edit from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.svg'
import notsave from '../../assets/not-save.svg'

const Item = ({ Task }) => {

  const [task, setTask] = useState(false);

  

  return (
    <div className={style.item}>

      <img src={task ? uncheck : check} alt="" width={20} height={20} />

      <div>
        {task ?
          <input type="text" placeholder='Task name...' className={style.input} />
          : <h1>Task One</h1>
        }

        {
          task ?
            <input type="text" placeholder='description' className={style.input} />
            : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum vero eveniet deserunt eum ipsum tempora doloribus.</p>
        }
      </div>


      <div className={style.options}>

        <img src={save} alt="" width={20} height={20} />
        <img onClick={() => setTask(!task)} src={edit} alt="" width={20} height={20} />
        <img src={deleteIcon} alt="" width={20} height={20} />

      </div>




    </div>
  )
}

export default Item