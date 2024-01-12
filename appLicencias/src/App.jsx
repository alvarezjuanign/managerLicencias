import { Licencias } from './pages/Licencias.jsx'
import { Formulario } from './pages/Formulario.jsx'
import { useState } from 'react'
import './App.css'

export function App () {
  const [licencias, setLicencias] = useState(false)

  const manejoClick = () => {
    setLicencias(!licencias)
  }

  return (
    <main>
      {licencias ? <Licencias /> : <Formulario />}
      <button className='verLic' onClick={manejoClick}>
        {licencias ? 'Formulario' : 'Licencias'}
      </button>
    </main>
  )
}
