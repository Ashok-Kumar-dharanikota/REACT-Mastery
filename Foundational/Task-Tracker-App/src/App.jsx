import { createContext, useState } from 'react'
import './App.css'
import Container from './components/Container/Container'
import { name } from 'ejs'


const AppData = [
  {
    name: "todo",
    list: [
      { id: 1, title: "one", desc: "lerem" }
    ]
  },
  {
    name: "progress",
    list: [
      { id: 2, title: "two", desc: "lerem" }
    ]
  },
  {
    name: "completed",
    list: [
      { id: 3, title: "three", desc: "lerem" }
    ]
  }
]

export const AppContext = createContext(AppData);


function App() {

  return (
    <AppContext.Provider value={AppData}>
      <section className='App'>
        <Container />
      </section>
    </AppContext.Provider>
  )
}

export default App
