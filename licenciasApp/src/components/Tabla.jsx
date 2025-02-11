export const Tabla = ({ orden, datos, setDatos }) => {
  const meses = [
    { id: 0, nombre: "Nov. 24" }, { id: 1, nombre: "Dic. 24" },
    { id: 2, nombre: "Ene. 25" }, { id: 3, nombre: "Feb. 25" },
    { id: 4, nombre: "Mar. 25" }, { id: 5, nombre: "Abr. 25" },
    { id: 6, nombre: "May. 25" }, { id: 7, nombre: "Jun. 25" },
    { id: 8, nombre: "Jul. 25" }, { id: 9, nombre: "Ago. 25" },
    { id: 10, nombre: "Sep. 25" }, { id: 11, nombre: "Oct. 25" },
    { id: 12, nombre: "Nov. 25" }
  ]

  const manejoInputInfo = (e) => {
    let id = parseInt(e.target.id.split("-")[2])
    const data = e.target.value

    const copiaDatos = [...datos]
    copiaDatos[orden] = { ...copiaDatos[orden] }
    copiaDatos[orden].info[id] = data

    setDatos(copiaDatos)
  }

  const manejoCelda = (e) => {
    const data = e.target.value
    const [, , fil, col] = e.target.id.split("-").map(Number)

    const copiaDatos = [...datos]
    copiaDatos[orden] = { ...copiaDatos[orden] }
    copiaDatos[orden].tabla[fil] = [...copiaDatos[orden].tabla[fil]]
    copiaDatos[orden].tabla[fil][col] = data

    setDatos(copiaDatos)
  }

  return (
    <article className="w-full mt-5 shadow-md border border-gray-300 rounded-md relative p-6 print:shadow-none print:text-xs print:p-2 print:border-none">
      <nav className="print:w-3/4 print:justify-center print:mx-auto">
        <ul className="flex flex-wrap gap-5 justify-evenly mb-4 print:flex-nowrap">
          {["Profesor/a", "DNI", "Cargo", "Turno"].map((campo, i) => (
            <li key={i} className="flex gap-2">
              <p><b>{campo}:</b></p>
              <input
                type="text"
                id={`input-${orden}-${i}`}
                placeholder={campo}
                value={datos[orden]?.info[i] || ""}
                onChange={manejoInputInfo}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className="overflow-x-auto print:overflow-visible">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100 left-0 z-10 sticky">Mes/Día</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i} className="border p-2 bg-gray-100">{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {meses.map((mes) => (
              <tr key={mes.id}>
                <td className="border p-1 font-medium sticky left-0 bg-white z-10">{mes.nombre}</td>
                {Array.from({ length: 31 }, (_, colIndex) => (
                  <td key={colIndex} className="border text-center">
                    <input
                      type="text"
                      id={`celda-${orden}-${mes.id}-${colIndex}`}
                      className="w-full text-center"
                      value={datos[orden]?.tabla[mes.id]?.[colIndex] || ""}
                      onChange={manejoCelda}
                    />
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="border p-1 font-medium sticky left-0 bg-white z-10"><b>Total:</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
