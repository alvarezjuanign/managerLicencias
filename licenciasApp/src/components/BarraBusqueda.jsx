export const BarraBusqueda = () => {
  return (
    <div className="relative m-2 print:hidden">
      <input
        placeholder="Search..."
        className="input shadow-lg px-5 py-3 rounded-xl w-56 transition-all focus:shadow-2xl border-2 outline-none"
        name="search"
        type="search"
      />
    </div>
  );
};
