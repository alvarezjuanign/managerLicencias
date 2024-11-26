import { useState } from 'react'
import { Planilla } from './Planilla.jsx'
import { Formulario } from './Formulario.jsx'

export function App() {
  const [activo, setActivo] = useState(false)

  return (
    <>
      <button onClick={() => setActivo(!activo)}>Planilla</button>

      {
        activo ? <Planilla></Planilla> : <Formulario></Formulario>
      }
    </>
  )
}
