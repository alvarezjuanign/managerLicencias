export function Planilla() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  const profesora = JSON.parse(localStorage.getItem("Profesoras"))
  let agrupadosPorNombre = profesora.reduce((acc, item) => {
    const { nombre, dia, mes, cod } = item
    if (!acc[nombre]) {
      acc[nombre] = []
    }
    acc[nombre].push({ dia, mes, cod })
    return acc
  }, {})

  console.log(agrupadosPorNombre)

  return (
    <main className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Planilla de asistencia</h2>
      {
        Object.keys(agrupadosPorNombre).map((nombre) => (
          <article key={nombre} className="border rounded-md p-5 mb-4 w-[1080]">
            <nav className="mb-4 flex justify-between">
              <div className="flex">
                <h2><b>Profesor/a:</b></h2>
                <span className="mx-1"></span>
                <p>{nombre}</p>
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
                    <tr key={mes}>
                      <td className="border px-2 py-1 font-medium bg-gray-100">
                        {mes}
                      </td>
                      {dias.map((dia) => (
                        <td key={`${mes}-${dia}`} className="border min-w-[52px] text-center">
                          <button className="w-full h-full hover:opacity-55">
                            {
                              agrupadosPorNombre[nombre]?.find((item) => parseInt(item.dia) === parseInt(dia) && item.mes.toLowerCase() === mes.toLowerCase())?.cod
                              ?? " "
                            }
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))
      }
    </main >
  )
}
