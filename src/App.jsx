import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home,
  About,
  Vans,
  VanDetails,
  Dashboard,
  Income,
  Reviews
} from './pages'
import { HeaderLayout, HostLayout } from './shared/layouts'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
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
          </Route>
          {/* ================================================= */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
