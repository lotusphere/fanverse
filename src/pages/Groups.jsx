import { useEffect } from 'react'
import { supabase } from '../../supabase'
import { useGroupContext } from '../GroupContext'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ACTIONS } from '../groupReducer'

function Groups() {
  const { state, dispatch } = useGroupContext()

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
    <div className="page">
      <Navbar />

      <div className="card-list">
        {state.groups.map((group) => (
          <Card key={group.id} group={group} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Groups
