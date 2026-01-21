import { toast } from "sonner";
import trash from "../assets/trash.svg";

export const BotonBorrar = ({ borrar }) => {
  const manejoModal = () => {
    document.querySelector("dialog").showModal();
  };

  const manejoBorrar = () => {
    document.querySelector("dialog").close();
    borrar();
    toast.success("Datos borrados");
  };

  const closeDialog = () => {
    document.querySelector("dialog").close();
  };

  return (
    <div className="print:hidden">
      <button
        type="button"
        onClick={manejoModal}
        className="text-white px-5 py-3 rounded-xl w-56 transition-all border-2 outline-none active:shadow-2xl print:hidden bg-red-500 hover:bg-red-600 flex gap-2 items-center justify-center"
      >
        <img src={trash} alt="Icono de tacho de basura" className="w-5" />
        <span className="font-medium">Borrar datos</span>
      </button>
      <dialog className="sm:max-w-xl p-6 rounded-lg">
        <p className="text-lg font-medium p-2 m-2">
          ¿Estás seguro de que quieres borrar los datos?
        </p>
        <footer className="flex gap-3 sm:justify-end">
          <button
            type="button"
            className="flex gap-1 stroke-white bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors p-2"
            onClick={manejoBorrar}
          >
            <img src={trash} className="w-5" alt="Icono de tacho de basura" />
            Borrar
          </button>
          <button
            type="button"
            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-lg transition-colors p-2"
            onClick={closeDialog}
          >
            Cancelar
          </button>
        </footer>
      </dialog>
    </div>
  );
};
