import { useState } from 'react'
import { useNavigate } from 'react-router'
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

  function handleCancel() {
    navigate(-1)
  }

  return (
    <div className="page form-page">
      <h3>Add a group</h3>
      <GroupForm
        onSubmit={fetchAddGroup}
        initialData={formData}
        errorMessage={state.errorMessage}
      />
      <button className="secondary" onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default AddGroup
