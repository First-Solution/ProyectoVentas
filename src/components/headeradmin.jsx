  
import { Link } from 'react-router-dom';
import logo from 'media/venta.png';
import perfil from 'media/perfil.png'
import settings from 'media/setings.png';
import { useAuth0 } from "@auth0/auth0-react";
import React, {useEffect, useState, useRef} from "react";
const Header  = () =>{
  const { user,logout } = useAuth0();

  const cerrarsesion = () =>{
    logout({ returnTo: window.location.origin })
      localStorage.setItem('token',null);
    }
return(

<div>
  <nav className="bg-indigo-500 rounded-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
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
            <div>
                <button onClick={() => cerrarsesion()}   className="max-w-xs bg-indigo-500  rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" >
                  
                  <img className="h-5 w-5 rounded-full" src={settings} alt=""/>
                  
                </button>
              </div>
              
            <div className="ml-3 relative">
              <div>
                <button type="button" className="max-w-xs bg-indigo-500  rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                                
                  <Link to = '/Admin/Perfil'>
                  <img className="h-8 w-8 rounded-full" src={user.picture} alt=""/>
                  </Link>
                  
                </button>
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
        
      </h1>
    </div>
  </header>
  
</div>
  

);
}
export default Header;
/*<Link to = '/Admin/Perfil'>
<img className="h-8 w-8 rounded-full" src={user.picture} alt=""/>
</Link>*/