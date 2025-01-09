import { ToastContainer, toast } from "react-toastify"

export function Formulario() {
  const notify = () => toast.success('Datos enviados', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notifyError = () => toast.error('Datos erroneos', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const manejoDatos = (e) => {
    e.preventDefault()

    let profesoras = JSON.parse(localStorage.getItem("Profesoras") || "[]")

    if (e.target.nombre.value == "") {
      notifyError()
      return
    }

    const profesora = Object.fromEntries(new FormData(e.target))
    profesoras.push(profesora)

    notify()

    localStorage.setItem("Profesoras", JSON.stringify(profesoras))

    e.target.nombre.value = ""
    e.target.cod.value = ""
    e.target.dia.value = ""
    e.target.mes.value = ""
  }

  return (
    <main className="p-4 flex flex-col items-center">
      < h2 className="text-2xl underline font-bold mb-4 text-center" > Formulario de licencias</h2 >
      <form className="flex flex-col border rounded-md p-5 w-1/2 mt-10" onSubmit={manejoDatos}>
        <label htmlFor="nombre" className="block mt-6" >
          Nombre:
        </label>
        <input type="text" name="nombre" id="nombre" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-slate-600" />
        <label htmlFor="cod" className="block mt-6" >
          Cod. Licencia:
        </label>
        <input type="text" name="cod" id="cod" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-slate-600" />
        <label htmlFor="dia" className="block mt-6" >
          Dia:
        </label>
        <input type="text" name="dia" id="dia" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-slate-600" />
        <label htmlFor="mes" className="block mt-6" >
          Mes:
        </label>
        <input type="text" name="mes" id="mes" className="border-b-[1px] active:outline-none focus:outline-none focus:border-b-slate-600" />

        <button type="submit" className="bg-amber-600 p-2 m-3 w-full text-white hover:bg-yellow-500 focus:outline-none font-bold rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Enviar</button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="light"
      />
    </main >
  )
}