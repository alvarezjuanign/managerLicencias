import search from "./../assets/search.svg"

export const Busqueda = () => {
  return (
    <div className="relative top-4">
      <input
        placeholder="Search..."
        className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
        name="search"
        type="search"
      />
      <img src={search} alt="logo de busqueda" className="size-6 absolute top-3 right-3 text-gray-500" />
    </div>
  )
}