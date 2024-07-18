import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { supabase } from '../../supabase'
import { ACTIONS } from '../groupReducer'
import { useGroupContext } from '../GroupContext'
import GroupForm from '../components/GroupForm'

function AddGroup() {
  const { state, dispatch } = useGroupContext()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    image: '',
  })

  async function fetchAddGroup(formData) {
    const { data, error } = await supabase
      .from('groups')
      .insert([formData])
      .select()

    if (error) {
      setErrorMessage(error.message)
    } else {
      dispatch({ type: ACTIONS.ADD_GROUP, payload: data[0] })
      navigate('/')
    }
  }

  return (
    <div className="page">
      <GroupForm
        onSubmit={fetchAddGroup}
        initialData={formData}
        errorMessage={state.errorMessage}
      />
      <div className="cancel-btn">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  )
}

export default AddGroup
