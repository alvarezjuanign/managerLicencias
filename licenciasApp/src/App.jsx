
export function Planilla() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  return (
    <div className="planilla-container">
      <h1>Planilla de Asistencia</h1>
      <table className="planilla">
        <thead>
          <tr>
            <th>Mes/Día</th>
            {dias.map((dia) => (
              <th key={dia}>{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {meses.map((mes) => (
            <tr key={mes}>
              <td>{mes}</td>
              {dias.map((dia) => (
                <td key={`${mes}-${dia}`}></td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Totales:</td>
            {dias.map((dia) => (
              <td key={`total-${dia}`}></td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}


