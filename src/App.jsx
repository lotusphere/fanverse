import { useState } from 'react'
import './App.css'
import AddGroup from './views/AddGroup'
import GroupList from './views/GroupList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fanverse!</h1>
      <GroupList />
      <AddGroup />
    </>
  )
}

export default App
