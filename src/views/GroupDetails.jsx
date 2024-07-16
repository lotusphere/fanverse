function GroupDetails({ group }) {
  return (
    <div className="group">
      <img src={img} alt={`img for ${group.name}`} />
      <h3 className="name">{group.name}</h3>
      <p className="description">{group.description}</p>
      <a href={group.url} target="_blank">
        <button>TikTok</button>
      </a>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default GroupDetails
