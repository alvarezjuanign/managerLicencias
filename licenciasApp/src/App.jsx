import { useEffect, useState } from "react"
import { Tabla } from "./components/Tabla.jsx"
import plus from "./assets/plus.svg"
import { Toaster, toast } from "sonner"

export function App() {
  const [tabla, setTabla] = useState([])

  const manejoAgregar = () => {
    const tablaProfesor = {
      "info": ["", "", "", ""],
      "tabla": [[], [], [], [], [], [], [], [], [], [], [], [], []]
    }

    setTabla([...tabla, tablaProfesor])
    localStorage.setItem("profesores", JSON.stringify([...tabla, tablaProfesor]))
    toast.success("Tabla agregada")
  }

  const borrarDatos = () => {
    localStorage.removeItem("profesores")
    toast.error("Datos borrados")
    setTabla([])
  }

  useEffect(() => {
    const profesores = localStorage.getItem("profesores")
    setTabla(profesores ? JSON.parse(profesores) : [])
  }, [])

  return (
    <main className="flex flex-col items-center p-0 m-0 relative">
      <div className="flex justify-center items-center gap-12 h-full print:hidden">
        <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
          <button onClick={borrarDatos} className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995] absolute top-4 right-4 print:hidden">
            <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2">
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Borrar datos</span>
              </div>
            </div>
          </button>
        </div>
      </div>
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
