import React from 'react'
import notSave from './../assets/not-save.svg'

const ItemCard = ({ style, item }) => {
    return (
        <div className=' bg-white p-4 w-fit h-fit rounded-2xl max-w-60 flex flex-col'>
            <img className=' w-6 h-6 ml-auto bg-gray-100 rounded-xl p-1 cursor-pointer' src={notSave} alt="" />
            <h1 className={`${style.title} text-xl font-bold pb-3`}>{item.title}</h1>

            <p className=' text-gray-500 text-sm font-normal mb-4'>{item.description}</p>

            <span className={`${style.tag} text-sm p-2 rounded-lg font-semibold w-fit`}>{item.status}</span>
        </div>
    )
}

export default ItemCard