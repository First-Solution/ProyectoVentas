  import { Link } from 'react-router-dom';
import logo from 'media/logo.svg';
const Header  = () =>{
    return(
      <>
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/'>
                <span className="sr-only">Workflow</span>
                <img className="h-16 w-auto sm:h-16" src={logo} alt=""/>
                </Link>
            </div>

          </div>
        </div>
        </header>
        </>
    )

  }
  export default Header;