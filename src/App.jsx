import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home,
  About,
  Vans,
  VanDetails,
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVansDetails,
  HostVanInfo,
  HostVanPhoto,
  HostVanPricing
} from './pages'
import { MainLayout, HostLayout } from './shared/layouts'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* VANS related pages */}
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetails />} />
          </Route>
          {/* Host related pages */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            {/* VANs nested in host/* */}
            <Route path="vans">
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVansDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhoto />} />
              </Route>
            </Route>
          </Route>
          {/* ================================================= */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
