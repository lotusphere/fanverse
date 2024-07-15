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

  async function addGroup(formData) {
    const { data, error } = await supabase
      .from('groups')
      .insert([formData])

    if (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <>
      <GroupForm 
        onSubmit={addGroup}
        initialData={formData}
        errorMessage={errorMessage}
      />
    </>
  )
}

export default AddGroup