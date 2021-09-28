import { Link } from "react-router-dom";
function RegistroU() {
    return (
      <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <h1 className = "text-gray-600  mx-auto text-center text-3xl py-3 font-semibold text-opacity-75">Registro Productos</h1>
      <form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Nombre De Producto
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Product"/>

            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                ID
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="P10"/>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Valor
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Valor U/N"/>

            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Cantidad
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="10"/>
            </div>
          </div>
          <div className="-mx-3 md:flex mt-2">
          <div className="min-w-full md:flex md:flex-1 lg:w-0 py-2">
              <Link to='/Vendedor/RegistroVentas'>
              <button  className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Registrar
              </button>
             </Link>
       </div>
          </div>
        </div>
      </form>
    </div>
    );
  }

  export default RegistroU;