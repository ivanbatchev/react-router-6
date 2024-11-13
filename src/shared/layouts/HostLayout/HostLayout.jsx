import { NavLink, Outlet } from 'react-router-dom'
import { activeStyles } from '../../lib/constants'
import './styles.css'

export const HostLayout = () => {
  const handleNavLinkChosen = ({ isActive }) => (isActive ? activeStyles : null)

  return (
    <>
      <nav className="host-nav">
        <NavLink end to="." style={handleNavLinkChosen}>
          Dashboard
        </NavLink>
        <NavLink to="income" style={handleNavLinkChosen}>
          Income
        </NavLink>
        <NavLink to="vans" style={handleNavLinkChosen}>
          Vans
        </NavLink>
        <NavLink to="reviews" style={handleNavLinkChosen}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
