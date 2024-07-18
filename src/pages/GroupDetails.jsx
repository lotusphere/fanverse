import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import TikTokLogo from '../components/TikTokLogo'

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
    <div className="page">
      <Link to="/">← Back to Home</Link>
      <div className="group-details">
        <img className="details-img" src={group.image} alt={`img for ${group.name}`} />
        <div className="details-content">
          <h2 className="name">{group.name}</h2>
          <TikTokLogo url={group.url} />
          <p className="description">{group.description}</p>
          <div className="buttons">
            <Link to={`/groups/${group.id}/edit`}><button>Edit</button></Link>
            <button className="secondary" onClick={() => fetchDeleteGroup(id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupDetails
