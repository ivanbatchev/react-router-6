import { createRoot } from 'react-dom/client'
import App from './app/App'
import './index.css'

import '../server'

createRoot(document.getElementById('root')).render(<App />)
