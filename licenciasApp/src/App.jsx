import { useState } from 'react'
import { Planilla } from './Components/Planilla.jsx'
import { Formulario } from './Components/Formulario.jsx'
import { ToastContainer, toast } from 'react-toastify'

export function App() {
  const [activo, setActivo] = useState(false)

  const handleDelete = () => {
    localStorage.removeItem("Profesoras")
    toast.success('Datos borrados', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    })
  }

  return (
    <>
      <button
        onClick={() => setActivo(!activo)}
        className="bg-amber-600 p-2 m-3 w-30 text-white hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {activo ? "Formulario" : "Planilla"}
      </button>

      {
        activo ?
          <>
            <button
              onClick={handleDelete}
              className="bg-amber-600 p-2 m-3 w-30 text-white hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Borrar datos
            </button>
            <Planilla></Planilla>
            <ToastContainer />
          </>
          : <Formulario></Formulario>
      }
    </>
  )
}
