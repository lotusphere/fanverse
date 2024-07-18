import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddGroup from './pages/AddGroup'
import Groups from './pages/Groups'
import GroupDetails from './pages/GroupDetails'
import EditGroup from './pages/EditGroup'
import GroupProvider from './GroupContext'
import './App.css'

function App() {
  return (
    <GroupProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Groups />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="groups/new" element={<AddGroup />} />
          <Route path="groups/:id" element={<GroupDetails />} />
          <Route path="groups/:id/edit" element={<EditGroup />} />
        </Routes>
      </BrowserRouter>
    </GroupProvider>
  )
}

export default App
