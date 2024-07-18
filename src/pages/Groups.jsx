import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../supabase'
import { useGroupContext } from '../GroupContext'
import Card from '../components/Card'
import { ACTIONS } from '../groupReducer'

function Groups() {
  const { state, dispatch } = useGroupContext()
  // const [groupList, setGroupList] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [errorMessage, setErrorMessage] = useState('')

  async function fetchGroups() {
    dispatch({ type: ACTIONS.FETCH_LOADING })
    const { data, error } = await supabase.from('groups').select('*')

    if (error) {
      dispatch({ type: ACTIONS.FETCH_FAILURE, payload: error.message })
    } else {
      dispatch({ type: ACTIONS.GET_ALL_GROUPS, payload: data })
    }
  }

  useEffect(() => {
    fetchGroups()
  }, [])

  if (state.loading) return <p>Loading...</p>
  if (state.errorMessage) return <p>Error: {state.errorMessage}</p>

  return (
    <div className="home">
      <div className="top-bar">
        <h2>Fanverse</h2>
        <Link to="/groups/new">
          <button>Add a group</button>
        </Link>
      </div>

      <div className="card-list">
        {state.groups.map((group) => (
          <Card key={group.id} group={group} />
        ))}
      </div>
    </div>
  )
}

export default Groups
