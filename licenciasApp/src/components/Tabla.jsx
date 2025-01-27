import { useState } from "react"

export const Tabla = ({ orden }) => {
  const profesor = JSON.parse(localStorage.getItem("profesores"))

  const [cod, setCod] = useState(() => {
    return profesor[orden].tabla || Array.from({ length: 12 }, () => Array.from({ length: 31 }, () => ""))
  })

  const manejarValorInput = (e) => {
    const index = e.target.id
    const data = e.target.value

    if (profesor) {
      profesor[orden].info[index] = data
      localStorage.setItem("profesores", JSON.stringify(profesor))
    }
  }

  const manejoDias = (e, mes, dia) => {
    const codigos = [...cod]
    codigos[mes][dia - 1] = e.target.value
    setCod(codigos)
    profesor[orden].tabla[mes][dia - 1] = e.target.value
    localStorage.setItem("profesores", JSON.stringify(profesor))
  }

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]
  const dias = Array.from({ length: 31 }, (_, index) => index + 1)

  return (
    <article className="w-full m-5 shadow-md border border-gray-300 rounded-md relative p-6 print:text-xs print:p-0 print:border-none">
      <nav className="print:w-3/4">
        <ul className="flex flex-wrap gap-5 justify-evenly mb-4 print:flex-nowrap">
          <li className="flex">
            <p><b>Profesor/a:</b></p>
            {
              profesor[orden].info[0]
                ? <p
                  className="w-[150px] bg-inherit ml-2 focus:outline-none">
                  {profesor[orden].info[0]}
                </p>
                : <input
                  type="text"
                  autoComplete="nombre"
                  placeholder="Maria, Miriam..."
                  className="w-[150px] bg-inherit ml-2 focus:outline-none"
                  id="0"
                  onChange={(e) => manejarValorInput(e)}
                />
            }
          </li>
          <li className="flex">
            <p><b>DNI:</b></p>
            {profesor[orden].info[1]
              ? <p
                className="w-[150px] bg-inherit ml-2 focus:outline-none">
                {profesor[orden].info[1]}
              </p>
              : <input
                type="text"
                autoComplete="dni"
                placeholder="123456789"
                className="w-[150px] bg-inherit ml-2 focus:outline-none"
                id="1"
                onChange={(e) => manejarValorInput(e)}
              />
            }
          </li>
          <li className="flex">
            <p><b>Cargo:</b></p>
            {profesor[orden].info[2]
              ? <p
                className="w-[150px] bg-inherit ml-2 focus:outline-none">
                {profesor[orden].info[2]}
              </p>
              : <input
                type="text"
                autoComplete="cargo"
                placeholder="Titular, Suplente..."
                className="w-[150px] bg-inherit ml-2 focus:outline-none"
                id="2"
                onChange={(e) => manejarValorInput(e)}
              />
            }
          </li>
          <li className="flex">
            <p><b>Turno:</b></p>
            {profesor[orden].info[3]
              ? <p
                className="w-[150px] bg-inherit ml-2 focus:outline-none">
                {profesor[orden].info[3]}
              </p>
              : <input
                type="text"
                autoComplete="turno"
                placeholder="Mañana, Tarde..."
                className="w-[150px] bg-inherit ml-2 focus:outline-none"
                id="3"
                onChange={(e) => manejarValorInput(e)}
              />
            }
          </li>
        </ul>
      </nav>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300">Mes</th>
            {dias.map(dia => (
              <th key={dia} className="border border-gray-300 p-1">
                {dia}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {meses.map((mes, index) => (
            <tr key={mes} className="border-b border-gray-200 hover:bg-gray-5">
              <td className="border border-gray-300 p-2 print:p-1 print:text-xs">{mes}</td>
              {dias.map(dia => (
                <td key={dia} id={`${mes}-${dia}`} className="border border-gray-300 w-[90px]" >
                  {
                    profesor[orden].tabla[index][dia - 1]
                      ? <p
                        className="w-full h-full bg-inherit text-center text-xs focus:outline-none">
                        {profesor[orden].tabla[index][dia - 1]}
                      </p>
                      : <input
                        type="text"
                        className="w-full h-full bg-inherit text-center text-xs focus:outline-none"
                        id={`${index + 1}-${dia}`}
                        onBlur={(e) => manejoDias(e, index, dia)} />
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article >
  )
}