import { Link } from 'react-router-dom'
import { supabase } from '../../supabase'
import { useGroupContext } from '../GroupContext'
import { ACTIONS } from '../groupReducer'
import TikTokLogo from './TikTokLogo'
import '@picocss/pico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'

function Card({ group }) {
  const { state, dispatch } = useGroupContext()

  async function fetchDeleteGroup(id) {
    const { error } = await supabase.from('groups').delete().eq('id', id)

    if (error) {
      dispatch({ type: ACTIONS.FETCH_FAILURE, payload: error.message })
    } else {
      dispatch({ type: ACTIONS.DELETE_GROUP, payload: id })
    }
  }

  return (
    <div className="card">
      <article>
        <header>
          <div className="card-title">{group.name}</div>
          <TikTokLogo url={group.url} />
        </header>
        <p className="description">{group.description}</p>
        <img
          className="card-img"
          src={group.image}
          alt={`img for ${group.name}`}
        />
        <footer>
          <Link to={`/groups/${group.id}`}>Details</Link>
          <div>
            <button
              className="trashcan-btn"
              onClick={() => fetchDeleteGroup(group.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <Link to={`/groups/${group.id}/edit`}>
              <FontAwesomeIcon icon={faPen} />
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}

export default Card
