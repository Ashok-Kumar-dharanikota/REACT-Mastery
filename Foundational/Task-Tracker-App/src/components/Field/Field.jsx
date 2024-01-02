import React from 'react'
import style from './Field.module.css';
import Item from '../Item/Item';

const Field = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className={style.field}>
                <div className={style.option}>
                    <p>Field</p>
                    <span>2</span>
                </div>
                <span>+</span>
            </div>

            <Item />
        </div>

    )
}

export default Field