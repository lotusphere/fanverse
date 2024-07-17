import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AddGroup from './pages/AddGroup'
import GroupList from './pages/GroupList'
import GroupDetails from './pages/GroupDetails'
import EditGroup from './pages/EditGroup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GroupList />} />
        <Route path="/groups" element={<GroupList />} />
        <Route path="groups/new" element={<AddGroup />} />
        <Route path="groups/:id" element={<GroupDetails />} />
        <Route path="groups/:id/edit" element={<EditGroup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
