import { useState } from 'react'
import { Planilla } from './Planilla.jsx'
import { Formulario } from './Formulario.jsx'

export function App() {
  const [activo, setActivo] = useState(false)

  return (
    <>
      <button
        onClick={() => setActivo(!activo)}
        className="border bg-amber-600 text-white p-2 rounded-md m-3"
      >
        {activo ? "Formulario" : "Planilla"}
      </button>

      {
        activo ? <Planilla></Planilla> : <Formulario></Formulario>
      }
    </>
  )
}
