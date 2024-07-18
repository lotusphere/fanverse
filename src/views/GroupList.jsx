import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../supabase'
import Card from '../components/Card'

function GroupList() {
  const [groupList, setGroupList] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  async function fetchDeleteGroup (id) {
    const { error } = await supabase.from('groups').delete().eq('id', id);
    
    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setGroupList(groupList.filter(group => group.id !== id));
  }

  useEffect(() => {
    async function fetchGroups() {
      const { data, error } = await supabase.from('groups').select('*')

      if (error) {
        setErrorMessage(error.message)
      } else {
        setGroupList(data)
      }
      setLoading(false)
    }

    fetchGroups()
  }, [])

  if (loading) return <p>Loading...</p>
  if (errorMessage) return <p>Error: {errorMessage}</p>

  return (
    <div>
      <Link to="/groups/new">Add a group</Link>
      <ul>
        {groupList.map((group) => (
          <Card key={group.id} group={group} />
          // <Card key={group.id} group={group} onDelete={fetchDeleteGroup} />
        ))}
      </ul>
    </div>
  )
}

export default GroupList
