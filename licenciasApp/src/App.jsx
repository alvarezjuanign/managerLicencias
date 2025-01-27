import { useEffect, useState } from "react"
import { Tabla } from "./components/Tabla.jsx"
import plus from "./assets/plus.svg"

export function App() {
  const [tabla, setTabla] = useState([])

  const manejoAgregar = () => {
    const tablaProfesor = {
      "info": [],
      "tabla": [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]
    }

    setTabla([...tabla, tablaProfesor])
    localStorage.setItem("profesores", JSON.stringify([...tabla, tablaProfesor]))
  }

  useEffect(() => {
    const profesores = localStorage.getItem("profesores")
    setTabla(profesores ? JSON.parse(profesores) : [])
  }, [])

  return (
    <main className="flex flex-col items-center p-0 m-0">
      <h1 className="text-2xl font-bold mt-8 print:hidden">Licencias</h1>
      <section className="flex flex-col items-center w-screen p-5">
        {tabla.map((tabla, index) => (
          <Tabla key={index} orden={index} />
        ))}
      </section>
      <div className="m-8 h-[80px] w-1/2 flex items-center justify-center border-dashed border rounded-md hover:cursor-pointer hover:opacity-45 print:hidden" >
        <img src={plus} alt="simbolo mas para agregar tabla" onClick={manejoAgregar} title="Agregar tabla" className="group cursor-pointer outline-none hover:rotate-90 duration-300" />
      </div>
    </main>
  )
}
