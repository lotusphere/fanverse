import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import GroupForm from '../components/GroupForm'
import { useGroupContext } from '../GroupContext'
import { ACTIONS } from '../groupReducer'

function EditGroup() {
  const { state, dispatch } = useGroupContext()
  const { id } = useParams()
  const navigate = useNavigate()
  const [group, setGroup] = useState({})

  async function fetchGroup() {
    dispatch({ type: ACTIONS.FETCH_LOADING })
    const { data, error } = await supabase
      .from('groups')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      dispatch({ type: ACTIONS.FETCH_FAILURE, payload: error.message })
    } else {
      setGroup(data)
      dispatch({ type: ACTIONS.GET_GROUP, payload: data })
    }
  }

  async function fetchEditGroup(updatedGroup) {
    const { data, error } = await supabase
      .from('groups')
      .update(updatedGroup)
      .eq('id', id)
      .select()

    if (error) {
      setErrorMessage(error.message)
    } else {
      dispatch({ type: ACTIONS.UPDATE_GROUP, payload: data[0] })
      navigate(`/groups/${id}`)
    }
  }

  useEffect(() => {
    fetchGroup(id)
  }, [id])

  if (state.loading) return <p>Loading...</p>
  if (state.errorMessage) return <p>Error: {state.errorMessage}</p>

  return (
    <div className="page form-page">
      <h3>Edit the group</h3>
      <GroupForm
        onSubmit={fetchEditGroup}
        initialData={group}
        errorMessage={state.errorMessage}
      />
      <Link to={`/groups/${group.id}`}>Cancel</Link>
    </div>
  )
}

export default EditGroup
