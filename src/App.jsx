import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './shared/components'
import { Home, About } from './pages'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App