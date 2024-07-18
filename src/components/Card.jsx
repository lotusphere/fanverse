import { Link } from 'react-router-dom'
import '@picocss/pico'

function Card({ group }) {
  return (
    <div className="card">
      <article>
        <header>
          <p>{group.name}</p>
          <a href={group.url} target="_blank">TikTok</a>
        </header>
        <p className="description">{group.description}</p>
        <img src={group.image} alt={`img for ${group.name}`} />
        <footer>
          <Link to={`/groups/${group.id}`}>Details</Link>
        </footer>
      </article>
    </div>
  )
}

export default Card
