import { useOutletContext } from 'react-router-dom'
import './styles.css'

export const HostVanPricing = () => {
  const { currentVan } = useOutletContext()
  return (
    <h3 className="host-van-price">
      ${currentVan.price}
      <span>/day</span>
    </h3>
  )
}
