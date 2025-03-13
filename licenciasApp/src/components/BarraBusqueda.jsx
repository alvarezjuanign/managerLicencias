import { useState } from "react";
import search from "../assets/search.svg";

export const BarraBusqueda = ({ onSearch }) => {
  const [busqueda, setBusqueda] = useState("");

  const buscar = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    setBusqueda(valor);
    onSearch(valor);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(busqueda);
    }
  };

  return (
    <form className="flex justify-between items-center relative w-64 print:hidden">
      <input
        placeholder="Search..."
        className="focus:outline-none pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all"
        name="search"
        type="search"
        value={busqueda}
        onChange={buscar}
        onKeyDown={handleKeyDown}
      />
      <img className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" src={search} alt="Buscar" />
    </form >
  );
};