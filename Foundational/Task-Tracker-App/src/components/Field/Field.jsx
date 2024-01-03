import React, { useState } from 'react';
import style from './Field.module.css';
import Item from '../Item/Item';

const Field = ({ fieldList }) => {
    const [itemCount, setItemCount] = useState(0);

    const handleClick = () => {
        setItemCount(itemCount + 1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={style.field}>
                <div className={style.option}>
                    <p>{fieldList.name}</p>
                    <span>{itemCount}</span>
                </div>
                <span onClick={handleClick}>+</span>
            </div>

            {Array.from({ length: itemCount }, (_, index) => (
                <Item key={index} />
            ))}
        </div>
    );
};

export default Field;
