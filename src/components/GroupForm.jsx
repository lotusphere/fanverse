import { useState } from 'react'

function GroupForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialData)

  function handleChange(e) {
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
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          TikTok Link:
          <input
            type="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Image:
          <input
            type="url"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GroupForm
