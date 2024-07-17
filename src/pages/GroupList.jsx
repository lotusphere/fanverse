import { useState, useEffect } from 'react'
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
      <ul>
        {groupList.map((group) => (
          <Card key={group.id} group={group} />
        ))}
      </ul>
    </div>
  )
}

export default GroupList
