import React, { useContext } from 'react'
import { context } from '../App';

const TestComponent = () => {

  const [store, setStore] = useContext(context);

  return (
    <div>
        {store.map((field) => (
          <h1 key={field.fieldName}>
            {field.fieldName}
          </h1>
        ))}
    </div>
  )
}

export default TestComponent