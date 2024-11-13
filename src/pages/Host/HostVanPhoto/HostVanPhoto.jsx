import { useOutletContext } from 'react-router-dom'
import './styles.css'

export const HostVanPhoto = () => {
  const { currentVan } = useOutletContext()

  return <img src={currentVan.imageUrl} className="host-van-detail-image" />
}
