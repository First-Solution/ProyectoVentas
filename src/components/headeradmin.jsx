  
import { Link } from 'react-router-dom';
import logo from 'media/venta.png';
import perfil from 'media/perfil.png'
import settings from 'media/setings.png';
const Header  = () =>{
return(
<>
<div>
  <nav className="bg-gray-700 rounded-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
          <Link to='/Admin'>
            <img className="h-16 w-auto py-2" src={logo} alt="Workflow"/>
            </Link> 
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link to='/Admin/Ventas'>
              <button  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Ventas
              </button>                   </Link> 
              <Link to='/Admin/Usuarios'>
              <button  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Usuarios
              </button>                 </Link> 
          
  
              <Link to='/Admin/Productos'>
              <button  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Productos
              </button>              </Link> 
              </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
          <div className=" md:flex  md:flex-1 ml-10 lg:w-1000  rounded-md ">
              <input className=" w-full  focus:border-transparent focus:border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 sm:text-sm inline-flex  rounded-md" placeholder="Buscar"/>
              <i className='fas fa-search py-2 px-3 hover:bg-gray-600 rounded-md shadow-sm whitespace-nowrap '></i>
            </div>
            <div>
                <button type="button" className="max-w-xs bg-gray-700 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Settings</span>
                  <img className="h-5 w-5 rounded-full" src={settings} alt=""/>
                  
                </button>
              </div>


            <div className="ml-3 relative">
              <div>
                <button type="button" className="max-w-xs bg-gray-700 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={perfil} alt=""/>
                  
                </button>
              </div>

              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
               
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
         
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <header className="bg-white shadow">
    <div clasNames="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Dashboard
      </h1>
    </div>
  </header>
  
</div>
  
</>
);
}
export default Header;