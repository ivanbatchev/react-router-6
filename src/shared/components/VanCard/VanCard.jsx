import { Link } from 'react-router-dom'
import { memo } from 'react'
import './styles.css'

export const VanCard = memo(({ van }) => {
  return (
    <main key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
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
