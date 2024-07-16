import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'

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
        console.log(data)
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
          <li key={group.id}>
            <h2>{group.name}</h2>
            <a href={group.url} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
            <p>{group.description}</p>
            <img src={group.image} alt={group.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupList
