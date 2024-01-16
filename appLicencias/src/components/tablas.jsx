export function Tablas ({ nombre, licencia, desde, hasta, observaciones }) {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Licencia</th>
            <th>Desde</th>
            <th>Hasta</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nombre}</td>
            <td>{licencia}</td>
            <td>{desde}</td>
            <td>{hasta}</td>
            <td>{observaciones}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
