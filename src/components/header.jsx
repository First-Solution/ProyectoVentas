  import { Link } from 'react-router-dom';
import logo from 'media/logo.svg';
import { useAuth0 } from "@auth0/auth0-react";
const Header  = () =>{
  const { loginWithRedirect } = useAuth0();
    return(
      <>
      <header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/'>
                <span className="sr-only">Workflow</span>
                <img className="h-16 w-auto sm:h-16" src={logo} alt=""/>
                </Link>
            </div>
            <div className="hidden md:flex items-center justify-center md:flex-1 lg:w-0">
              
              <button onClick={() => loginWithRedirect()} className="sm:auto mx-auto ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Ingresar
              </button>
            
            </div>
          </div>
        </div>
        </header>
        </>
    )

  }
  export default Header;