import { useState } from 'react'
import './App.css'
import AddGroup from './views/AddGroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fanverse!</h1>
      <AddGroup />
    </>
  )
}

export default App
