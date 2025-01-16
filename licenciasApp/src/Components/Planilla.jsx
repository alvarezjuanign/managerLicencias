export function Planilla() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1)
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]

  let agrupadosPorNombre = {}
  if (localStorage.getItem("Profesoras")) {
    const profesora = JSON.parse(localStorage.getItem("Profesoras"))
    agrupadosPorNombre = profesora.reduce((acc, item) => {
      const { nombre, dia, mes, cod, cantDias, dni, cargo, turno } = item

      if (!acc[nombre]) {
        acc[nombre] = []
        acc[nombre].push({ dia, mes, cod, cantDias, dni, cargo, turno })
      } else {
        acc[nombre].push({ dia, mes, cod, cantDias })
      }

      return acc
    }, {})
  }

  const manejoCantDias = (nombre, dia, mes) => {
    const registro = agrupadosPorNombre[nombre] || []
    for (const item of registro) {
      const diaInicial = parseInt(item.dia)
      const diaFin = parseInt(item.cantDias) + diaInicial - 1
      if (item.mes.toLowerCase() === mes.toLowerCase() && dia >= diaInicial && dia <= diaFin) {
        return item.cod
      }
    }
    return ""
  }

  const manejoTotal = (nombre) => {
    let acc = agrupadosPorNombre[nombre].reduce((acc, item) => acc + parseInt(item.cantDias), 0)
    return acc
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 mt-8 text-center underline">Planilla de inasistencias</h2>
      {
        localStorage.getItem("Profesoras") ? Object.keys(agrupadosPorNombre).map((nombre) => (
          <article key={nombre} className="border rounded-md p-5 mb-4 mt-8 overflow-x-scroll lg:overflow-hidden">
            <nav>
              <div className="flex justify-around">
                <div className="flex">
                  <h2><b>Profesor/a:</b></h2>
                  <span className="mx-1"></span>
                  <p>{nombre}</p>
                </div>
                <div className="flex">
                  <p><b>DNI:</b></p>
                  <span className="mx-1"></span>
                  <p>{agrupadosPorNombre[nombre][0].dni}</p>
                </div>
                <div className="flex">
                  <p><b>Turno:</b></p>
                  <span className="mx-1"></span>
                  <p>{agrupadosPorNombre[nombre][0].turno}</p>
                </div>
                <div className="flex mb-4">
                  <p><b>Cargo:</b></p>
                  <span className="mx-1"></span>
                  <p>{agrupadosPorNombre[nombre][0].cargo}</p>
                </div>
              </div>
            </nav>
            <div>
              <table className="table-auto border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border px-2 py-1 bg-gray-200">Mes/Día</th>
                    {dias.map((dia) => (
                      <th key={dia} className="border px-2 py-1 bg-gray-200">
                        {dia}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {meses.map((mes) => (
                    console.log(meses.indexOf(mes)),
                    <tr key={meses.indexOf(mes)}>
                      <td className="border px-2 py-1 font-medium bg-gray-100">
                        {mes}
                      </td>
                      {dias.map((dia) => (
                        <td key={`${mes}-${dia}`} className="border min-w-[52px] text-center">
                          <button className="w-full h-full hover:opacity-55">
                            {manejoCantDias(nombre, dia, mes)}
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="border px-2 py-1 font-medium bg-gray-100">
                      Total
                    </td>
                    <td className="border px-2 py-1 text-right" colSpan={dias.length}>
                      {manejoTotal(nombre)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        )) : "No hay datos para mostrar"
      }
    </main >
  )
}
