import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './shared/components'
import { Home, About, Vans } from './pages'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App