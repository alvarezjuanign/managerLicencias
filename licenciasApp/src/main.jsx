import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Planilla } from './Planilla.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Planilla />
    <Planilla />
    <Planilla />
    <Planilla />
    <footer className="text-center m-4 ">
      <button
        className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 @media print:hidden"
        onClick={window.print}
      >
        Descargar
      </button>
    </footer>
  </StrictMode>,
)
