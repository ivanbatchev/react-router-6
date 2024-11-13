import { Link, NavLink } from 'react-router-dom'
import './styles.css'

export const Header = () => {
  const handleNavLinkChosen = ({ isActive }) => (isActive ? 'active-link' : '')

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="/host" className={handleNavLinkChosen}>
          Host
        </NavLink>
        <NavLink to="/about" className={handleNavLinkChosen}>
          About
        </NavLink>
        <NavLink to="/vans" className={handleNavLinkChosen}>
          Vans
        </NavLink>
      </nav>
    </header>
  )
}
