export function Planilla() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1)
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  let agrupadosPorNombre = {}
  if (localStorage.getItem("Profesoras")) {
    const profesora = JSON.parse(localStorage.getItem("Profesoras"))
    agrupadosPorNombre = profesora.reduce((acc, item) => {
      const { nombre, dia, mes, cod, cantDias } = item
      if (!acc[nombre]) {
        acc[nombre] = []
      }
      acc[nombre].push({ dia, mes, cod, cantDias })
      return acc
    }, {})
    console.log(agrupadosPorNombre)
  }

  const manejoCantDias = (nombre, dia, mes) => {
    const registro = agrupadosPorNombre[nombre] || []
    for (const item of registro) {
      const diaInicial = parseInt(item.dia)
      const diaFin = parseInt(item.cantDias) + diaInicial - 1
      if (item.mes.toLowerCase() === mes.toLowerCase() && dia >= diaInicial && dia <= diaFin) {
        return item.cod
      }
      else {
        return ""
      }
    }
  }

  return (
    <main className="p-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 mt-20 text-center underline">Planilla de inasistencias</h2>
      {
        localStorage.getItem("Profesoras") ? Object.keys(agrupadosPorNombre).map((nombre) => (
          <article key={nombre} className="border rounded-md p-5 mb-4 mt-8 w-full overflow-x-scroll md:overflow-x-scroll lg:overflow-x-hidden">
            <nav className="mb-4 flex justify-between">
              <div className="flex">
                <h2><b>Profesor/a:</b></h2>
                <span className="mx-1"></span>
                <p>{nombre}</p>
              </div>
            </nav>
            <div>
              <table className="table-auto w-full border-collapse text-sm">
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
                    <tr key={mes}>
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
                </tbody>
              </table>
            </div>
          </article>
        )) : "No hay datos para mostrar"
      }
    </main >
  )
}
