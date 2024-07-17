import { useState } from 'react'
import GroupForm from '../components/GroupForm'
import { supabase } from '../../supabase'

function AddGroup() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    image: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  async function fetchAddGroup(formData) {
    const { data, error } = await supabase.from('groups').insert([formData])

    if (error) {
      setErrorMessage(error.message)
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
