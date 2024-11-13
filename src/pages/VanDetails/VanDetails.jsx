import { useVans } from '../../shared/lib/hooks'
import { useParams, Link } from 'react-router-dom'
import { Loader } from '../../shared/components'
import './styles.css'

export const VanDetails = () => {
  const { id } = useParams()
  const { loading, data: van } = useVans(id)

  if (loading) {
    return <Loader />
  }

  return (
    <section className="van-detail-container">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>
          Van not found...
          <br /> Sorry...
        </h2>
      )}
    </section>
  )
}
