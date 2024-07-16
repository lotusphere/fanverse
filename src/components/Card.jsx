function Card({ group }) {
  return (
    <li className="card">
      <h3 className="name">{group.name}</h3>
      <p className="description">{group.description}</p>
      <a href={group.url} target="_blank">
        <button className="discography-btn">TikTok</button>
      </a>
      <img src={group.image} alt={`img for ${group.name}`} />
    </li>
  )
}

export default Card
