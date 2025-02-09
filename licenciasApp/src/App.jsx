import { useEffect, useState } from "react"
import { Tabla } from "./components/Tabla.jsx"
import { Toaster, toast } from "sonner"
import { BotonBorrar } from "./components/BotonBorrar.jsx"
import plus from "./assets/plus.svg"

export function App() {
  const [tabla, setTabla] = useState([])

  const manejoAgregar = () => {
    const tablaProfesor = {
      "info": ["", "", "", ""],
      "tabla": [[], [], [], [], [], [], [], [], [], [], [], [], []],
      "total": 0
    }

    setTabla([...tabla, tablaProfesor])
    localStorage.setItem("profesores", JSON.stringify([...tabla, tablaProfesor]))
    toast.success("Tabla agregada")
  }

  const borrarDatos = () => {
    localStorage.removeItem("profesores")
    setTabla([])
  }

  useEffect(() => {
    const profesores = localStorage.getItem("profesores")
    setTabla(profesores ? JSON.parse(profesores) : [])
  }, [])

  return (
    <main className="flex flex-col items-center p-0 m-0 relative">
      <BotonBorrar borrar={borrarDatos} />
      <button
        onClick={manejoAgregar}
        className="group m-8 h-[80px] w-1/2 flex items-center justify-center border-dashed border-4 rounded-md hover:cursor-pointer hover:opacity-45 print:hidden
        active:scale-95 duration-300 active:duration-75 active:outline-none" >
        <img src={plus} alt="Agregar" className="w-10 h-10 group-hover:opacity-45" />
      </button>
      <section className="flex flex-col items-center w-screen p-5 print:p-0">
        {tabla.map((tabla, index) => (
          <Tabla key={index} orden={index} />
        ))}
      </section>
      <Toaster richColors className="print:hidden" />
    </main>
  )
}
