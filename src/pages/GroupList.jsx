import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to="/groups/new"><button>Add a group</button></Link>
      <div className="card-list grid">
        {groupList.map((group) => (
          <Card key={group.id} group={group} />
        ))}
      </div>
    </div>
  )
}

export default GroupList
