import React from 'react'
import { CounterApp2 } from './components/CounterApp2'
import FormMasc from './components/FormMasc'

export const App = () => {
  return (
    <div>
      <h1>Aquí va mi contador</h1>
      <CounterApp2 
        number1={100}
      />
      <CounterApp2 
        number1={1000}
      />
      <CounterApp2 
        number1={10000}
      />
      <CounterApp2 
        number1={100000}
      />
      <FormMasc />
    </div>
  )
}
