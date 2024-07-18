import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'

function GroupDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [group, setGroup] = useState({})
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  async function fetchGroup() {
    const { data, error } = await supabase
      .from('groups')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      setErrorMessage(error.message)
    } else {
      setGroup(data)
    }
    setLoading(false)
  }

  async function fetchDeleteGroup(id) {
    const { error } = await supabase.from('groups').delete().eq('id', id)

    if (error) {
      setErrorMessage(error.message)
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    fetchGroup()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (errorMessage) return <p>Error: {errorMessage}</p>

  return (
    <div className="group">
      <Link to="/groups">Back to Home</Link>
      <img src={group.image} alt={`img for ${group.name}`} />
      <h3 className="name">{group.name}</h3>
      <a href={group.url} target="_blank">
        <button>TikTok</button>
      </a>
      <p className="description">{group.description}</p>

      <Link to={`/groups/${group.id}/edit`}>Edit</Link>
      <button onClick={() => fetchDeleteGroup(id)}>Delete</button>
    </div>
  )
}

export default GroupDetails
