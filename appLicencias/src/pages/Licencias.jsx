import { supabase } from '../components/client'
import { useEffect, useState } from 'react'
import './licencias.css'

export const Licencias = () => {
  const [docentes, setDocentes] = useState([])

  useEffect(() => {
    getDocentes()
  }, [])

  async function getDocentes () {
    const { data } = await supabase.from('docentes').select()
    setDocentes(data)
  }

  async function handleUpdate () {
    supabase.channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'docentes' },
        (payload) => {
          console.log('Change received!', payload)
        }
      )
      .subscribe()
  }

  const handleDelete = async (docente) => {
    await supabase.from('docentes').delete().eq('id', docente)
    setDocentes(docentes.filter((d) => d.id !== docente))
    handleUpdate()
  }

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
          {docentes.map((docente) => (
            <tr key={docente.id}>
              <td>{docente.nombre}</td>
              <td>{docente.licencia}</td>
              <td>{docente.desde}</td>
              <td>{docente.hasta}</td>
              <td>{docente.observaciones}</td>
              <td>
                <button onClick={() => handleDelete(docente.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
