import { supabase } from '../components/client'
import { useEffect, useState } from 'react'
import { Tablas } from '../components/tablas'
import './licencias.css'

export const Licencias = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getNames()
  }, [])

  async function getNames () {
    const { data } = await supabase
      .from('docentes')
      .select()
    setData(data)
  }

  // async function handleUpdate () {
  //   supabase.channel('custom-all-channel')
  //     .on(
  //       'postgres_changes',
  //       { event: '*', schema: 'public', table: 'docentes' },
  //       (payload) => {
  //         console.log('Change received!', payload)
  //       }
  //     )
  //     .subscribe()
  // }
  // const handleDelete = async (table) => {
  //   await supabase.from('docentes').delete().eq('id', table)

  //   handleUpdate()
  // }

  return (
    <main>
      {data.map((d) => (
        <div key={d.id}>
          <Tablas nombre={d.nombre} licencia={d.licencia} desde={d.desde} hasta={d.hasta} observaciones={d.observaciones} />
          {/* <button onClick={() => handleDelete(table)}>Eliminar</button> */}
        </div>
      ))}
    </main>
  )
}
