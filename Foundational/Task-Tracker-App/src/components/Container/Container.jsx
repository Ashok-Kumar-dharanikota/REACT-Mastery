import React, { useContext } from 'react'
import style from './Container.module.css';
import Title from '../Title/Title';
import { context } from '../../App';
import Field from '../Field/Field';

const Container = () => {

    const [store, setStore] = useContext(context)


    return (
        <div className={style.Container}>
            <Title />


            <div style={{ display: 'flex', gap: 30 }}>

                {store.map((field) => (
                    <Field key={field.fieldName} field={field}/>
                ))}

            </div>

        </div>
    )
}

export default Container