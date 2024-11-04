import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Vans, VanDetails } from './pages'
import './App.css'
import { Layout } from './shared/components'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App