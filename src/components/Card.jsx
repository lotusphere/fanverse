import { Link } from 'react-router-dom'
import '@picocss/pico'
import TikTokLogo from './TikTokLogo'

function Card({ group }) {
  return (
    <div className="card">
      <article>
        <header>
          <div className="card-title">{group.name}</div>
          <TikTokLogo url={group.url} />
        </header>
        <p className="description">{group.description}</p>
        <img className="card-img" src={group.image} alt={`img for ${group.name}`} />
        <footer>
          <Link to={`/groups/${group.id}`}>Details</Link>
        </footer>
      </article>
    </div>
  )
}

export default Card
