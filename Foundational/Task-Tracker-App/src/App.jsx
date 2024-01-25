import { createContext, useState } from 'react'
import './App.css'
import TestComponent from './components/TestComponent';
import Container from './components/Container/Container';
export const context = createContext();


function App() {

  const data = [
    {
      fieldName: "Todo",
      list: [
        {
          id: Math.random().toString(),
          title: "Ashok",
          desc: "",
          status: "NS"
        }
      ]
    },
    {
      fieldName: "Progress",
      list: [
        {
          id: Math.random().toString(),
          title: "",
          desc: "",
          status: "OP"
        }
      ]
    },
    {
      fieldName: "Completed",
      list: [
        {
          id: Math.random().toString(),
          title: "",
          desc: "",
          status: "CD"
        }
      ]
    }

  ]

  const [store, setStore] = useState(data)

  return (
    <section className='App'>

      <context.Provider value={[store, setStore]}>
        <Container />
      </context.Provider>

    </section>
  )
}

export default App;
