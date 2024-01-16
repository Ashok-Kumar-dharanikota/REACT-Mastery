import React, { useContext, useState } from 'react';
import style from './Field.module.css';
import Item from '../Item/Item';
import { AppContext } from '../../App';

const Field = ({ name, Itemlist }) => {

    const data = useContext(AppContext);

    const handleClick = () => {
        const newItem = {
            title: " ",
            des: " "
        }
        setList([...Itemlist, newItem]);

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={style.field}>
                <div className={style.option}>
                    <p>{name}</p>
                    <span>{Itemlist.length}</span>
                </div>
                <span onClick={handleClick}>+</span>
            </div>

            {/* {Array.from({ length: itemCount }, (_, index) => (
                <Item key={index} Task={fieldList[index]} />
            ))} */}

            {Itemlist.map((item) => (
                <Item key={item.title} Task={item} />
            ))}
        </div>
    );
};

export default Field;
