import React from 'react'
import style from './Container.module.css';
import Title from '../Title/Title';
import Field from '../Field/Field';

const Container = () => {
    return (
        <div className={style.Container}>
            <Title />

            <div className={style.nav}>
                <p>Your Fields</p>

                <button>Add +</button>
            </div>

            <div style={{display: 'flex', gap: 30}}>
                <Field />
                <Field />
                <Field />
                <Field />

            </div>
        </div>
    )
}

export default Container