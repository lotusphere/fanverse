import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="top-bar">
      <div>
        <h2>Fanverse</h2>
        <p>Explore K-pop groups here!</p>
      </div>

      <div className="buttons">
      <Link to="/">
        <button>View all groups</button>
      </Link>
      <Link to="/groups/new">
        <button>Add a group</button>
      </Link>
      </div>
    </div>
  )
}

export default Navbar