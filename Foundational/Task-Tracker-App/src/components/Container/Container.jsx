import React, { useContext, useState } from 'react'
import style from './Container.module.css';
import Title from '../Title/Title';
import Field from '../Field/Field';
import { AppContext } from '../../App';

const Container = () => {

    const DataList = useContext(AppContext);

    const [fields, setFields] = useState([]);
    const [name, setName] = useState("");

    const handleClick = () => {
        const newField = {
            name: name,
            item: []
        }
        setFields([...fields, newField]);
        setName("");
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className={style.Container}>
            <Title />

            <div className={style.nav}>
                <input onChange={handleChange} className={style.inputfield} value={name} type='text' placeholder='Write your task' />

                <button onClick={handleClick}>add +</button>
            </div>

            <div style={{ display: 'flex', gap: 30 }}>
                {/* <Field name={"Todo's"} />
                <Field name={"Progress"} />
                <Field name={"Completed"} /> */}
                {DataList.map((field) => (
                    <Field key={field.name} name={field.name} Itemlist={field.list}/>
                ))}
            </div>

        </div>
    )
}

export default Container