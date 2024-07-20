import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

function TikTokLogo({ url }) {
  return (
    <div className="social-logo">
      <a href={url} target="_blank">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
    </div>
  )
}

export default TikTokLogo
