
export function Planilla() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  return (
    <main className="p-4 border m-2">
      <h2 className="text-2xl font-bold mb-4 text-center">Planilla de asistencia</h2>
      <nav className="mb-4 flex justify-between">
        <div className="flex flex-col">
          <h3>Profesor/a:</h3>
          <input type="text" className="mb-2 border-b-[1px] border-gray-400 active:outline-none focus:outline-none" />
          <h3>Cargo:</h3>
          <input type="text" className="mb-2 border-b-[1px] border-gray-400 active:outline-none focus:outline-none" />
          <h3>Sit. Revista:</h3>
          <input type="text" className="mb-2 border-b-[1px] border-gray-400 active:outline-none focus:outline-none" />
        </div>
        <div>
          <h3>Ciclo Lectivo:</h3>
          <input type="text" className="ml-2 border-b-[1px] border-gray-400 active:outline-none focus:outline-none" />
        </div>
      </nav>
      <div>
        <table className="table-auto border-collapse mx-auto text-sm">
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
                  <td key={`${mes}-${dia}`} className="border min-w-[53px]">
                    <input type="text" maxLength={6} className="w-full text-center active:outline-none focus:outline-none" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}


