import { Link } from 'react-router-dom'
import { Loader } from '../../../shared/components'
import { useVans } from '../../../shared/lib/hooks'
import './styles.css'

export const HostVans = () => {
  const { loading, data: vans } = useVans('', true)

  if (loading) {
    return <Loader />
  }

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    </section>
  )
}
