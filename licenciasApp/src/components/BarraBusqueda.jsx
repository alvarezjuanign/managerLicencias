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
    <form className="flex print:hidden">
      <input
        placeholder="Search..."
        className="shadow-lg px-5 py-3 rounded-xl w-56 border-2 outline-none"
        name="search"
        type="search"
        value={busqueda}
        onChange={buscar}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="shadow-lg px-3 py-2 rounded-xl border-2 outline-none"
        onClick={() => onSearch(busqueda)}
      >
        <img className="w-5 h-5" src={search} alt="Buscar" />
      </button>
    </form>
  );
};