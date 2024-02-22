import { supabase } from '../components/client'
import { useEffect, useState } from 'react'
import { Tablas } from '../components/tablas'

export const Licencias = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getNames()
  }, [])

  async function getNames () {
    const { data } = await supabase
      .from('docentes')
      .select()

    const sortedData = data.reduce((acc, fila) => {
      const nombre = fila.nombre

      if (!acc[nombre]) {
        acc[nombre] = []
      }

      acc[nombre].push(fila)
      return acc
    }, {})

    const result = Object.entries(sortedData).map(([nombre, datos]) => ({
      nombre,
      datos
    }))

    setData(result)
  }

  return (
    <main>
      {console.log(data)}
      {data &&
         data.map(({ nombre, datos }) => (
          <div key={nombre}>
            <Tablas nombre={nombre} datos={datos} />
          </div>
        ))}
    </main>
  )
}
