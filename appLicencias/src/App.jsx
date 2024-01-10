import { createClient } from '@supabase/supabase-js'
import './App.css'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

function App () {
  return (
    <main>
      <h1>Hello</h1>
      <form className='formularioLic'>
        <input name='nombre' type='text' placeholder='Nombre y apellidos...' />
        <input name='licencia' type='text' placeholder='Licencia...' />
        <input type='date' />
        <input type='date' />
        <input type='text' placeholder='Observaciones...' />
        <button type='submit'>Buscar</button>
      </form>
    </main>
  )
}

export default App
