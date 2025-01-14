import { useState } from 'react'
import { Planilla } from './Components/Planilla.jsx'
import { Formulario } from './Components/Formulario.jsx'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'

export function App() {
  const [activo, setActivo] = useState(false)
  const [profesoras, setProfesoras] = useState(true)

  const handleDelete = () => {
    if (confirm("¿Estás seguro de borrar los datos?")) {
      localStorage.removeItem("Profesoras")
    }

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

    window.dispatchEvent(new Event("storage"))
  }

  useEffect(() => {
    const revisarLocalStorage = () => {
      const data = localStorage.getItem("Profesoras")
      setProfesoras(!data)
    }
    revisarLocalStorage()

    window.addEventListener("storage", revisarLocalStorage)

    return () => {
      window.removeEventListener("storage", revisarLocalStorage)
    }
  }, [])

  return (
    <main className="h-screen">
      <nav>
        <button
          onClick={() => setActivo(!activo)}
          className="absolute mt-4 ml-4 w-36 bg-[#B0D7FF] text-[#2D3142] border border-transparent px-5 py-2 rounded-full shadow-md hover:bg-[#EAE8FF] hover:text-[#ADACB5] active:bg-[#ADACB5] active:text-[#EAE8FF] focus:ring-2 focus:ring-[#B0D7FF] focus:outline-none transition-all duration-200"
        >
          {activo ? "Formulario" : "Planilla"}
        </button>

        {
          activo ?
            <>
              <button
                disabled={profesoras}
                onClick={handleDelete}
                className=" absolute left-40 mt-4 ml-4 w-36 bg-[#B0D7FF] text-[#2D3142] border border-transparent px-5 py-2 rounded-full shadow-md hover:bg-[#EAE8FF] hover:text-[#ADACB5] active:bg-[#ADACB5] active:text-[#EAE8FF] focus:ring-2 focus:ring-[#B0D7FF] focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#B0D7FF] disabled:text-[#2D3142]"
              >
                Borrar datos
              </button>
              <Planilla></Planilla>
              <ToastContainer />
            </>
            : <Formulario></Formulario>
        }
      </nav>
    </main>
  )
}
