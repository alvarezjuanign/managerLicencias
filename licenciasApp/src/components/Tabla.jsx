import trash from "../assets/trash.svg";
import { toast, Toaster } from "sonner";

export const Tabla = ({ orden, datos, setDatos }) => {
  const meses = [
    { id: 0, nombre: "Nov. 24" },
    { id: 1, nombre: "Dic. 24" },
    { id: 2, nombre: "Ene. 25" },
    { id: 3, nombre: "Feb. 25" },
    { id: 4, nombre: "Mar. 25" },
    { id: 5, nombre: "Abr. 25" },
    { id: 6, nombre: "May. 25" },
    { id: 7, nombre: "Jun. 25" },
    { id: 8, nombre: "Jul. 25" },
    { id: 9, nombre: "Ago. 25" },
    { id: 10, nombre: "Sep. 25" },
    { id: 11, nombre: "Oct. 25" },
    { id: 12, nombre: "Nov. 25" },
  ];

  const manejoInputInfo = (e) => {
    let id = Number.parseInt(e.target.id.split("-")[2]);
    const data = e.target.value;

    const copiaDatos = [...datos];
    copiaDatos[orden] = { ...copiaDatos[orden] };
    copiaDatos[orden].info[id] = data;

    setDatos(copiaDatos);
  };

  const manejoTotal = () => {
    const copiaDatos = [...datos];
    copiaDatos[orden] = { ...copiaDatos[orden] };
    copiaDatos[orden].tabla = [...copiaDatos[orden].tabla];

    let totalParos = 0;
    let totalAdministrativas = 0;
    let totalEnfermedad = 0;
    let total = 0;

    copiaDatos[orden].tabla.forEach((mes) => {
      mes.forEach((dia) => {
        if (dia === "p" || dia === "P") {
          totalParos++;
        } else if (dia === "a" || dia === "A") {
          totalAdministrativas++;
        } else if (dia === "e" || dia === "E") {
          totalEnfermedad++;
        }
      });
    });

    total = totalParos + totalAdministrativas + totalEnfermedad;

    copiaDatos[orden].totalParos = totalParos;
    copiaDatos[orden].totalAdministrativas = totalAdministrativas;
    copiaDatos[orden].totalEnfermedad = totalEnfermedad;
    copiaDatos[orden].total = total;

    setDatos(copiaDatos);
  };

  const manejoCelda = (e) => {
    const data = e.target.value;
    const [, , fil, col] = e.target.id.split("-").map(Number);

    const copiaDatos = [...datos];
    copiaDatos[orden] = { ...copiaDatos[orden] };
    copiaDatos[orden].tabla[fil] = [...copiaDatos[orden].tabla[fil]];
    copiaDatos[orden].tabla[fil][col] = data;

    setDatos(copiaDatos);
    manejoTotal();
  };

  const manejoBorrarTabla = () => {
    const profesores = JSON.parse(localStorage.getItem("profesores") || []);
    if (orden >= 0 && orden < profesores.length) {
      profesores.splice(orden, 1);
    }
    toast.success("Tabla borrada correctamente");
    localStorage.setItem("profesores", JSON.stringify(profesores));
    setDatos(profesores);
  };

  return (
    <article className="w-full mt-5 shadow-md border border-gray-300 rounded-md relative p-6 print:mb-20 print:shadow-none print:text-xs print:p-0 print:border-none">
      <button
        className="flex rounded-md absolute top-0 right-0 bg-red-500 hover:bg-red-600 print:hidden"
        onClick={manejoBorrarTabla}
      >
        <img src={trash} className="h-8 p-1" />
      </button>
      <nav>
        <ul className="flex flex-wrap gap-5 mb-4 print:mb-2 print:border-none print:shadow-none print:flex-nowrap">
          {["Profesor/a", "DNI", "Cargo", "Turno"].map((campo, i) => (
            <li key={i} className="flex gap-2">
              <p>
                <b>{campo}:</b>
              </p>
              <input
                type="text"
                id={`input-${orden}-${i}`}
                placeholder={campo}
                value={datos[orden]?.info[i] || ""}
                onChange={manejoInputInfo}
                className="print:w-[]"
              />
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left py-2 px-3 text-medium text-gray-500 border-b">
                Mes/Día
              </th>
              {Array.from({ length: 31 }, (_, i) => (
                <th
                  key={i}
                  className="text-center font-medium text-gray-500 border-b"
                >
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {meses.map((mes) => (
              <tr key={mes.id}>
                <td className="border p-1 bg-white text-[14px] border-b border-gray-100">
                  {mes.nombre}
                </td>
                {Array.from({ length: 31 }, (_, colIndex) => (
                  <td
                    key={colIndex}
                    className="text-center border-b border-gray-100 border-r"
                  >
                    <input
                      type="text"
                      id={`celda-${orden}-${mes.id}-${colIndex}`}
                      className="w-full text-center print:text-xs"
                      value={datos[orden]?.tabla[mes.id]?.[colIndex] || ""}
                      onChange={manejoCelda}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-6 mt-2 text-sm justify-end">
          <div className=" flex items-center gap-2">
            <span className="font-medium text-gray-500">Paros: </span>
            <span className="text-gray-700">{datos[orden]?.totalParos}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-500">Administrativas: </span>
            <span className="text-gray-700">
              {datos[orden]?.totalAdministrativas}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-500">Enfermedad: </span>
            <span className="text-gray-700">
              {datos[orden]?.totalEnfermedad}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-500">Total: </span>
            <span className="text-gray-700">{datos[orden]?.total}</span>
          </div>
        </div>
      </div>
      <Toaster />
    </article>
  );
};
