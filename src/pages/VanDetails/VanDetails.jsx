import { useVans } from "../../shared/lib/hooks"
import { useParams } from "react-router-dom"
import { Loader } from "../../shared/components"
import './styles.css'

export const VanDetails = () => {
  const { id } = useParams()
  const { loading, data: van } = useVans(id);

  if (loading) {
    return <Loader />
  }

  console.log(van)

  return (
    <section className="van-list-container">
      <h1>VanDetails</h1>
    </section>
  )
}

