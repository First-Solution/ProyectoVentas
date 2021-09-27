  import { Link } from 'react-router-dom';
import logo from 'media/logo.png';
const Header  = () =>{
    return(
      <>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/'>
                <span className="sr-only">Workflow</span>
                <img className="h-16 w-auto sm:h-16" src={logo} alt=""/>
                </Link>
            </div>
            <div className=" md:flex items-between justify-between md:flex-1 lg:w-0 ml-8 border-2 border-gray-100   rounded-md ">
              <input className=" w-full  focus:border-transparent focus:border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm inline-flex  rounded-md" placeholder="Buscar"/>
              <i className='fas fa-search py-2 px-3 hover:bg-indigo-600 rounded-md shadow-sm whitespace-nowrap '></i>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to='/login'>
              <button  className="sm:auto mx-auto ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Ingresar
              </button>
             </Link>
            </div>
          </div>
        </div>
        </header>
        </>
    )

  }
  export default Header;