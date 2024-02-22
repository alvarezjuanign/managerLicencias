import './tablas.css'

export function Tablas ({ nombre, datos }) {
  return (
    <main className='tabla'>
      <header className='header'>
        <div>
          <h4><em><b>Docente: </b></em></h4>
          <p>{nombre}</p>
        </div>
        <div>
          <h4><em><b>Cargo: </b></em></h4>
          <p>{datos[0].cargo}</p>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Mes</th>
            <th>Licencia</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody >
          {datos.map((d, index) => (
            <tr key={index}>
              <td>{d.mes}</td>
              <td>{d.licencia}</td>
              <td>{d.observaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
