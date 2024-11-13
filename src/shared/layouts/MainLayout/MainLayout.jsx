import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../../components'
import './styles.css'

export const MainLayout = () => {
  return (
    <div className="site-wrapper">
      <Header />

      <main className="site-content-wrapper">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
