import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import GroupForm from '../components/GroupForm'

function EditGroup() {
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

  async function fetchEditGroup(updatedGroup) {
    const { data, error } = await supabase.from('groups').update(updatedGroup).eq('id', id).select()

    if (error) {
      setErrorMessage(error.message)
    } else {
      navigate(`/groups/${id}`)
    }
  }

  useEffect(() => {
    fetchGroup()
  }, [id])

  if (loading) return <p>Loading...</p>

  return (
    <div className="page">
      <GroupForm
        onSubmit={fetchEditGroup}
        initialData={group}
        errorMessage={errorMessage}
      />
      <Link to={`/groups/${group.id}`}><button>Cancel</button></Link>
    </div>
  )
}

export default EditGroup
