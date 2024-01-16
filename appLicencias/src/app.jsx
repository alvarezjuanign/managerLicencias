import { Licencias } from './pages/licencias.jsx'
import { Formulario } from './pages/formulario.jsx'
import { useState } from 'react'
import './app.css'

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
