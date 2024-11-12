import { Link } from 'react-router-dom'
import './styles.css'

export const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}
