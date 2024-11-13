import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../../shared/components'
import { useVans } from '../../../shared/lib/hooks'
import './styles.css'

export const HostVansDetails = () => {
  const { id } = useParams()
  const { loading, data: currentVan } = useVans(id, true)

  if (loading) {
    return <Loader />
  }

  return (
    <section>
      <Link to=".." className="back-button">
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
      </div>
    </section>
  )
}
