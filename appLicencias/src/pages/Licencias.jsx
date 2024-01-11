import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import './licencias.css'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const Licencias = () => {
  const [docentes, setDocentes] = useState([])

  useEffect(() => {
    getDocentes()
  }, [docentes])

  async function getDocentes () {
    const { data } = await supabase.from('docentes').select()
    setDocentes(data)
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
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
