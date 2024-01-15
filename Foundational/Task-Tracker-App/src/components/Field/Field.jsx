import React, { useState } from 'react';
import style from './Field.module.css';
import Item from '../Item/Item';

const Field = ({ name }) => {

    const [list, setList] = useState([]);

    const handleClick = () => {
        const newItem = {
            title: " ",
            des: ""
        }
        setList([...list,newItem]);

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={style.field}>
                <div className={style.option}>
                    <p>{name}</p>
                    <span>{list.length}</span>
                </div>
                <span onClick={handleClick}>+</span>
            </div>

            {/* {Array.from({ length: itemCount }, (_, index) => (
                <Item key={index} Task={fieldList[index]} />
            ))} */}

            {list.map((item) => (
                <Item />
            ))}
        </div>
    );
};

export default Field;
