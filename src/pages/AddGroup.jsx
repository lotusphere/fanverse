import { useState } from 'react'
import { useNavigate } from 'react-router'
import { supabase } from '../../supabase'
import GroupForm from '../components/GroupForm'

function AddGroup() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    image: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  async function fetchAddGroup(formData) {
    const { data, error } = await supabase.from('groups').insert([formData]).select()

    if (error) {
      setErrorMessage(error.message)
    } else {
      console.log(data)
      navigate(`/groups/${data[0].id}`)
    }
  }

  return (
    <>
      <GroupForm
        onSubmit={fetchAddGroup}
        initialData={formData}
        errorMessage={errorMessage}
      />
    </>
  )
}

export default AddGroup
