import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import Card from '../components/Card'

function GroupList() {
  const [groupList, setGroupList] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

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
