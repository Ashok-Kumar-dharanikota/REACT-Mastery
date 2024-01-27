import React from 'react'

const FieldComponent = ({field}) => {
    return (
        <div className={`rounded-xl shadow-lg h-fit ${field.color} text-xl p-3 flex items-center justify-between w-40`}>
            <h1 className={`text-white text-base`}>{field.name}</h1>
            <div className={` bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm`}>1</div>
        </div>
    )
}

export default FieldComponent