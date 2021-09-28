import { Link } from 'react-router-dom';
import im from 'media/apreton.svg';
const Tabla = () =>{
    return(
       <>
<h1 className = "text-gray-600  mx-auto text-center text-3xl py-3 font-semibold text-opacity-75">Ventas</h1>
<div className="flex flex-col py-2">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id venta
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cliente
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Valor
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha Inicial
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha Final
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Responsable
              </th>
              <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-500">102</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={im} alt=""/>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                500.000
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                 Embalaje
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                28-10-2020
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                28-10-2021
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Andrea
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link to='/Admin/EditarVentas'>
                <p className="text-indigo-600 hover:text-indigo-900">Edit</p>
              </Link>
              </td>
            </tr>

          </tbody>
        </table>
        
      </div>
      <div className="min-w-full md:flex md:flex-1 lg:w-0 py-2">
              <Link to='/Admin/RegistroVentas'>
              <button  className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Agregar
              </button>
             </Link>
       </div>
    </div>
  </div>
</div>

       </>
    );
}

export default Tabla;