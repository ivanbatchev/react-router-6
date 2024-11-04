import { useVans } from "../../shared/lib/hooks"
import { Loader } from "../../shared/components"
import './styles.css'

export const Vans = () => {
  const { loading, data: vans } = useVans();

  if (loading) {
    return <Loader />
  }


  const vanElements = vans.map(van => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ))

  return (
    <div className="van-list-container">
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}

