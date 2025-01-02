export function Formulario() {
  const manejoDatos = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (data.nombre === "" || data.cod === "" || data.dia === "" || data.mes === "") return
    localStorage.setItem(data.nombre, JSON.stringify(data))

    console.log(data.nombre, data.cod, data.dia, data.mes)
  }

  return (
    <main className="p-4">
      < h2 className="text-2xl font-bold mb-4 text-center" > Formulario de licencias</h2 >
      <form className="flex flex-col border rounded-md p-5" onSubmit={manejoDatos}>
        <label htmlFor="nombre" className="block mt-6" >
          Nombre:
        </label>
        <input type="text" name="nombre" id="nombre" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-[2px]" />
        <label htmlFor="cod" className="block mt-6" >
          Cod. Licencia:
        </label>
        <input type="text" name="cod" id="cod" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-[2px]" />
        <label htmlFor="dia" className="block mt-6" >
          Dia:
        </label>
        <input type="text" name="dia" id="dia" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-[2px]" />
        <label htmlFor="dia" className="block mt-6" >
          Mes:
        </label>
        <input type="text" name="mes" id="mes" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-[2px]" />

        <button type="submit" className="bg-amber-600 text-white p-2 rounded-md m-3 w-28">Enviar</button>
      </form>
    </main >
  )
}