import React, { useContext } from 'react'

const Provider = () => {

    const AppData = {
        todo: [
            { id: 1, title: "one", desc: "lerem" }
        ],
        progress: [
            { id: 2, title: "two", desc: "lerem" }
        ],
        completed: [
            { id: 3, title: "three", desc: "lerem" }
        ]
    }

    const AppContext = useContext(AppData);


    return (
        <AppContext.Provider value={AppData}>

        </AppContext.Provider>
    )
}

export default Provider