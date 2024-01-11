import { createClient } from '@supabase/supabase-js'
import './App.css'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

function App () {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new FormData(e.target))
    const { data, error } = await supabase
      .from('docentes')
      .insert([
        {
          nombre: `${fields.nombre}`,
          licencia: `${fields.licencia}`,
          desde: `${fields.desde}`,
          hasta: `${fields.hasta}`,
          observaciones: `${fields.observaciones}`
        }
      ])
      .select()

    if (error) console.error(error)
    if (data) console.log(data)
  }

  return (
    <main>
      <h1>Licencias / Inasistencias</h1>
      <form className='formularioLic' onSubmit={handleSubmit}>
        <input name='nombre' type='text' placeholder='Nombre y apellidos...' />
        <input name='licencia' type='text' placeholder='Licencia...' />
        <input name='desde' type='date' />
        <input name='hasta' type='date' />
        <textarea name='observaciones' className='observaciones' placeholder='Observaciones...' />
        <button type='submit'>Añadir licencia</button>
      </form>
    </main>
  )
}

export default App
