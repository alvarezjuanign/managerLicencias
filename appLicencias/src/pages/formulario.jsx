import { supabase } from '../components/client'
import './formulario.css'

export const Formulario = () => {
  const manejoSubmit = async (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new FormData(e.target))

    if (fields.nombre === '') return
    if (fields.licencia === '') return
    if (fields.mes === '') return

    const { data, error } = await supabase
      .from('docentes')
      .insert([
        {
          nombre: `${fields.nombre}`,
          cargo: `${fields.cargo}`,
          licencia: `${fields.licencia}`,
          mes: `${fields.mes}`,
          observaciones: `${fields.observaciones}`
        }
      ])
      .select()

    if (error) console.error(error)
    if (data) console.log(data) //  TODO: handle errors
  }

  return (
    <main>
      <h1>Licencias / Inasistencias</h1>
      <form className='formularioLic' onSubmit={manejoSubmit}>
        <input name='nombre' className='nombre' type='text' placeholder='Nombre y apellidos...' />
        <input name='cargo' type='text' placeholder='Cargo...' />
        <input name='licencia' type='text' placeholder='Licencia...' />
        <input name='mes' type='text' placeholder='Mes...' />
        <textarea name='observaciones' className='observaciones' placeholder='Observaciones...' />
        <button className='boton' type='submit'>Añadir licencia</button>
      </form>
    </main>

  )
}
