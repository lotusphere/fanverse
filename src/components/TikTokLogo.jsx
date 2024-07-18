import tiktok from '../assets/tiktok.svg'

function TikTokLogo({ url }) {
  return (
    <a href={url} target="_blank">
      <img className="tiktok" src={tiktok} alt="logo for tiktok" />
  </a>
  )
}

export default TikTokLogo