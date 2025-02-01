import { useState } from "react"
import "./printStyles.css"

export const Tabla = ({ orden }) => {
  const meses = [
    { id: 0, nombre: "Nov. 24" },
    { id: 1, nombre: "Dic. 24" },
    { id: 2, nombre: "Ene. 25" },
    { id: 3, nombre: "Feb. 25" },
    { id: 4, nombre: "Mar. 25" },
    { id: 5, nombre: "Abr. 25" },
    { id: 6, nombre: "May. 25" },
    { id: 7, nombre: "Jun. 25" },
    { id: 8, nombre: "Jul. 25" },
    { id: 9, nombre: "Ago. 25" },
    { id: 10, nombre: "Sep. 25" },
    { id: 11, nombre: "Oct. 25" },
    { id: 12, nombre: "Nov. 25" }
  ]

  const [profe, setProfe] = useState(() => {
    const guardado = localStorage.getItem("profesores")
    return guardado ? JSON.parse(guardado) : []
  })

  const manejoInputInfo = (e) => {
    let id = e.target.id
    const data = e.target.value
    id = parseInt(id)

    const copiaProfe = [...profe]
    copiaProfe[orden] = { ...copiaProfe[orden] }
    copiaProfe[orden].info[id] = data

    localStorage.setItem("profesores", JSON.stringify(copiaProfe))
    setProfe(copiaProfe)
  }

  const manejoCelda = (e) => {
    const data = e.target.value
    const id = e.target.id.split("-")
    let [fil, col] = id.map(Number)
    fil = parseInt(fil)
    col = parseInt(col)

    const copiaProfe = [...profe]
    copiaProfe[orden] = { ...copiaProfe[orden] }
    copiaProfe[orden].tabla = [...copiaProfe[orden].tabla]
    copiaProfe[orden].tabla[fil] = [...copiaProfe[orden].tabla[fil]]
    copiaProfe[orden].tabla[fil][col] = data

    localStorage.setItem("profesores", JSON.stringify(copiaProfe))
    setProfe(copiaProfe)
  }

  if (!profe?.[orden]) return <p>No hay profesores</p>

  return (
    <article className="w-full mt-5 shadow-md border border-gray-300 rounded-md relative p-6 print:shadow-none print:text-xs print:p-0 print:border-none">
      <nav className="print:w-3/4 print:justify-center print:mx-auto">
        <ul className="flex flex-wrap gap-5 justify-evenly mb-4 print:flex-nowrap">
          <li className="flex gap-2">
            <p><b>Profesor/a:</b></p>
            {
              profe[orden].info[0]
                ? <p>{profe[orden].info[0]}</p>
                : <input type="text" id={`nombreProfesor-${orden}`} placeholder="Maria, Miriam..." onBlur={manejoInputInfo} />
            }
          </li>
          <li className="flex gap-2">
            <p><b>DNI:</b></p>
            {
              profe[orden].info[1]
                ? <p>{profe[orden].info[1]}</p>
                : <input type="text" id={`dniProfesor-${orden}`} placeholder="12345678" onBlur={manejoInputInfo} />
            }
          </li>
          <li className="flex gap-2">
            <p><b>Cargo:</b></p>
            {
              profe[orden].info[2]
                ? <p>{profe[orden].info[2]}</p>
                : <input type="text" id={`cargoProfesor-${orden}`} placeholder="Titular, Suplente..." onBlur={manejoInputInfo} />
            }
          </li>
          <li className="flex gap-2">
            <p><b>Turno:</b></p>
            {
              profe[orden].info[3]
                ? <p>{profe[orden].info[3]}</p>
                : <input type="text" id={`turnoProfesor-${orden}`} placeholder="Mañana, Tarde..." onBlur={manejoInputInfo} />
            }
          </li>
        </ul>
      </nav>
      <div className="overflow-x-auto print:overflow-visible">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100 left-0 z-10 sticky">Mes/Día</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i} className="border p-2 bg-gray-100">
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {meses.map((mes) => (
              <tr key={mes.id}>
                <td className="border p-1 font-medium sticky left-0 bg-white z-10">{mes.nombre}</td>
                {Array.from({ length: 31 }, (_, colIndex) => (
                  <td key={colIndex} className="border text-center">
                    {
                      profe[orden].tabla[mes.id][colIndex]
                        ? <p>{profe[orden].tabla[mes.id]?.[colIndex]}</p>
                        : <input
                          type="text"
                          id={`celda-${orden}-${mes.id}-${colIndex}`}
                          className="w-full"
                          onBlur={manejoCelda}
                        />
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
