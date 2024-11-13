import { Link } from 'react-router-dom'
import { memo } from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import './styles.css'

export const VanCard = memo(({ van, searchParams }) => {
  return (
    <main key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: searchParams }}>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  searchParams: PropTypes.string.isRequired
}
