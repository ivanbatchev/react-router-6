import { Link } from 'react-router-dom'
import { memo } from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import './styles.css'

export const VanCard = memo(({ van }) => {
  return (
    <main key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </main>
  )
})

VanCard.displayName = 'VanCard'

VanCard.propTypes = {
  van: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
}
