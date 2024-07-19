import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useGroupContext } from '../GroupContext'
import { ACTIONS } from '../groupReducer'
import { supabase } from '../../supabase'
import TikTokLogo from '../components/TikTokLogo'

function GroupDetails() {
  const { state, dispatch } = useGroupContext()
  const { id } = useParams()
  const navigate = useNavigate()
  const [group, setGroup] = useState({})

  async function fetchGroup() {
    dispatch({ type: ACTIONS.FETCH_LOADING })
    const { data, error } = await supabase.from('groups').select('*').eq('id', id).single()

    if (error) {
      dispatch({ type: ACTIONS.FETCH_FAILURE, payload: error.message })
    } else {
      setGroup(data)
      dispatch({ type: ACTIONS.GET_GROUP, payload: data })
    }
  }

  async function fetchDeleteGroup(id) {
    const { error } = await supabase.from('groups').delete().eq('id', id)

    if (error) {
      dispatch({ type: ACTIONS.FETCH_FAILURE, payload: error.message })
    } else {
      dispatch({ type: ACTIONS.DELETE_GROUP, payload: id })
      navigate('/')
    }
  }

  useEffect(() => {
    const curGroup = state.groups.find((group) => group.id === id)
    if (curGroup) {
      setGroup(curGroup)
    } else {
      fetchGroup(id)
    }
  }, [id])

  if (state.loading) return <p>Loading...</p>
  if (state.errorMessage) return <p>Error: {state.errorMessage}</p>

  return (
    <div className="page">
      <Link to="/">← Back to Home</Link>
      <div className="group-details">
        <img
          className="details-img"
          src={group.image}
          alt={`img for ${group.name}`}
        />
        <div className="details-content">
          <h2 className="name">{group.name}</h2>
          <TikTokLogo url={group.url} />
          <p className="description">{group.description}</p>
          <div className="buttons">
            <Link to={`/groups/${group.id}/edit`}>
              <button>Edit</button>
            </Link>
            <button className="secondary" onClick={() => fetchDeleteGroup(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupDetails
