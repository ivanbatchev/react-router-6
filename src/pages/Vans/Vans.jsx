import { useVans } from "../../shared/lib/hooks"
import { Loader, VanCard } from "../../shared/components"
import './styles.css'

export const Vans = () => {
  const { loading, data: vans } = useVans();

  if (loading) {
    return <Loader />
  }

  return (
    <section className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map((van) => <VanCard key={van.id} van={van} />)}
      </div>
    </section>
  )
}

