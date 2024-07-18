import { useState } from 'react'
import '@picocss/pico'

function GroupForm({ onSubmit, initialData, errorMessage }) {
  const [formData, setFormData] = useState(initialData)
  const [error, setError] = useState(errorMessage)

  function handleChange(e) {
    setError('')
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          TikTok link
          <input
            name="url"
            type="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <input
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Image link:
          <input
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      { error && <p className="error">{error}</p> }
    </div>
  )
}

export default GroupForm
