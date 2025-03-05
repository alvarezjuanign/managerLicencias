import { useEffect, useState } from "react";
import { Tabla } from "./components/Tabla.jsx";
import { Toaster, toast } from "sonner";
import { BotonBorrar } from "./components/BotonBorrar.jsx";
import { BarraBusqueda } from "./components/BarraBusqueda.jsx";
import plus from "./assets/plus.svg";

export function App() {
  const [tablaGuardada, setTablaGuardada] = useState([]);
  const [tabla, setTabla] = useState(() => {
    const profesores = localStorage.getItem("profesores");
    return profesores ? JSON.parse(profesores) : [];
  });

  useEffect(() => {
    localStorage.setItem("profesores", JSON.stringify(tabla));
  }, [tabla]);

  useEffect(() => {
    setTablaGuardada(tabla);
  }, [tabla]);

  const manejoAgregar = () => {
    const tablaProfesor = {
      info: ["", "", "", ""],
      tabla: Array(13)
        .fill([])
        .map(() => Array(31).fill("")),
      totalParos: 0,
      totalAdministrativas: 0,
      totalEnfermedad: 0
    };
    setTabla((prevTabla) => [...prevTabla, tablaProfesor]);
    toast.success("Tabla agregada");
  };

  const borrarDatos = () => {
    localStorage.removeItem("profesores");
    setTabla([]);
    setTablaGuardada([]);
  };

  const manejoBusqueda = (busqueda) => {
    if (busqueda === "") {
      setTablaGuardada(tabla);
    } else {
      const tablaFiltrada = tabla.filter((tabla) =>
        tabla.info[0]?.toLowerCase().includes(busqueda.toLowerCase())
      );
      setTablaGuardada(tablaFiltrada);
    }
  };

  return (
    <main className="flex flex-col items-center p-0 m-0 relative">
      <nav className="w-full flex justify-evenly m-2">
        <BarraBusqueda onSearch={manejoBusqueda} />
        <BotonBorrar borrar={borrarDatos} />
      </nav>
      <button
        onClick={manejoAgregar}
        className="group m-8 h-[80px] w-1/2 flex items-center justify-center border-dashed border-4 rounded-md hover:cursor-pointer hover:opacity-45 print:hidden
          active:scale-95 duration-300 active:duration-75 active:outline-none"
      >
        <img
          src={plus}
          alt="Agregar"
          className="w-10 h-10 group-hover:opacity-45"
        />
      </button>
      <section className="flex flex-col items-center w-screen p-5 print:p-0">
        {tablaGuardada.length > 0 ? (
          tablaGuardada.map((_, index) => (
            <Tabla
              key={index}
              orden={index}
              datos={tablaGuardada}
              setDatos={setTabla}
            />
          ))
        ) : (
          <p className="text-gray-500">No se encontraron resultados.</p>
        )}
      </section>
      <Toaster richColors className="print:hidden" />
    </main>
  );
};