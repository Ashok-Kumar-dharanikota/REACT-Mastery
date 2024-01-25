import React, { useContext, useState } from 'react';
import style from './Field.module.css';
import { context } from '../../App';
import Item from '../Item/Item';

const Field = ({ field }) => {

    const [store, setStore] = useContext(context);
    const [ItemList, setItemList] = useState(field.list);


    const handleClick = () => {
        const newItem = {
            id: Math.random().toString(),
            title: "",
            desc: "",
            status: "NS"
        }

        

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={style.field}>
                <div className={style.option}>
                    <p>{field.fieldName}</p>
                    <span>{0}</span>
                </div>
                <span>+</span>
            </div>

            {ItemList.map((item) => (
                <Item key={item.id} Task={item} />
            ))}
        </div>
    );
};

export default Field;
