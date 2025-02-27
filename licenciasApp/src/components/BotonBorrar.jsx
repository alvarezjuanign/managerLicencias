import { toast } from "sonner";

export const BotonBorrar = ({ borrar }) => {
  const manejoBorrar = () => {
    borrar();
    toast.error("Datos borrados");
  };

  return (
    <div className="relative m-2 print:hidden">
      <button
        onClick={manejoBorrar}
        className="shadow-lg px-5 py-3 rounded-xl w-56 transition-all border-2 outline-none active:shadow-2xl print:hidden"
      >
        <span className="font-semibold">Borrar datos</span>
      </button>
    </div>
  );
};
