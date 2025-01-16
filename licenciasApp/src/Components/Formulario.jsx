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
    theme: "light",
  })

  const notifyError = () => toast.error('Datos erroneos', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const manejoDatos = (e) => {
    e.preventDefault()

    let profesoras = JSON.parse(localStorage.getItem("Profesoras") || "[]")

    if (e.target.nombre.value == "") {
      notifyError()
      return
    }

    const profesora = Object.fromEntries(new FormData(e.target))

    if (e.target.cantDias.value == "") {
      profesora.cantDias = "1"
    }

    profesoras.push(profesora)
    notify()

    localStorage.setItem("Profesoras", JSON.stringify(profesoras))
    window.dispatchEvent(new Event("storage"))
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen m-0 p-0">
      <h2 className="text-2xl underline font-bold mb-4 text-center" > Formulario de licencias</h2 >
      <form className="flex flex-col border border-grey-400 rounded-md p-5 w-3/4 mt-10 shadow-xl lg:w-1/2" onSubmit={manejoDatos}>
        <div className="md:grid grid-cols-2 gap-8 justify-items-center">
          <p className="w-full">
            <label htmlFor="nombre" className="block mt-4" >
              Nombre:
            </label>
            <input type="text" name="nombre" id="nombre" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit" placeholder="Maria, Miriam..." />
          </p>

          <p className="w-full mt-4">
            <label htmlFor="cod" className="block" >
              Cod. Licencia:
            </label>
            <input type="text" name="cod" id="cod" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit" maxLength={6} />
          </p>

          <p className="w-full mt-4">
            <label htmlFor="cantDias">
              Cantidad de días:
            </label>
            <input type="text" name="cantDias" id="cantDias" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit" placeholder="1, 2, 3..." />
          </p>

          <p className="w-full mt-4">
            <label htmlFor="dia" className="block" >
              Dia:
            </label>
            <input type="text" name="dia" id="dia" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit" placeholder="1, 2, 3..." />
          </p>

          <p className="w-full mt-4">
            <label htmlFor="mes" className="block" >
              Mes:
            </label>
            <input type="text" name="mes" id="mes" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit" placeholder="Enero, Febrero, Marzo..." />
          </p>

          <p className="w-full mt-4">
            <label htmlFor="dni" className="block" >
              DNI:
            </label>
            <input type="text" name="dni" id="dni" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit" />
          </p>

          <p className="w-full mt-4">
            <label htmlFor="turno" className="block" >
              Turno:
            </label>
            <select type="select" name="turno" id="turno" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit">
              <option value="Vacio"></option>
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
            </select>
          </p>

          <p className="w-full mt-4">
            <label htmlFor="cargo" className="block" >
              Cargo:
            </label>
            <input type="text" name="cargo" id="cargo" className="w-full border-b border-gray-300 py-1 focus:border-b focus:border-blue-400 transition-colors focus:outline-none peer bg-inherit" />
          </p>

          <button type="submit" className="mt-10 w-full bg-[#B0D7FF] text-[#2D3142] border border-transparent px-5 py-2 rounded-full shadow-md hover:bg-[#EAE8FF] hover:text-[#ADACB5] active:bg-[#ADACB5] active:text-[#EAE8FF] focus:ring-2 focus:ring-[#B0D7FF] focus:outline-none transition-all duration-200 col-span-2">Enviar</button>
        </div>
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