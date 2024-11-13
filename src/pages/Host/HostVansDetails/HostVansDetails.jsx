import { Link, useParams, Outlet, NavLink } from 'react-router-dom'
import { Loader } from '../../../shared/components'
import { useVans } from '../../../shared/lib/hooks'
import { activeStyles } from '../../../shared/lib/constants'
import './styles.css'

export const HostVansDetails = () => {
  const { id } = useParams()
  const { loading, data: currentVan } = useVans(id, true)

  const handleNavLinkChosen = ({ isActive }) => (isActive ? activeStyles : null)

  if (loading) {
    return <Loader />
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink to="." end style={handleNavLinkChosen}>
            Details
          </NavLink>

          <NavLink to="pricing" style={handleNavLinkChosen}>
            Pricing
          </NavLink>

          <NavLink to="photos" style={handleNavLinkChosen}>
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  )
}
