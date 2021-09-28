import { Link } from "react-router-dom";
function Login() {
    return (
      <div className="font-sans ">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-000 ">
          <div className="relative sm:max-w-sm w-full">
              <div className="card bg-gray-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
              <div className="card bg-indigo-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                  <label for="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                      Iniciar Sesion
                  </label>
                  <form method="#" action="#" className="mt-10">
                                      
                     
          
                      <div className="mt-7">                
                          <input type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                      </div>
  
                      <div className="mt-7">                
                          <input type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                      </div>
  
                     
  
                      
          
                      <div class="mt-7">
                      <Link to = '/Vendedor'>
                          <button className="bg-gray-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                              Ingresar
                          </button>
                        </Link>
                      </div>
          
                      <div className="flex mt-7 items-center text-center">
                          <hr className="border-gray-300 border-1 w-full rounded-md"/>
                          <label className="block font-medium text-sm text-gray-600 w-full">
                              Ingresar con
                          </label>
                          <hr className="border-gray-300 border-1 w-full rounded-md"/>
                      </div>
          
                      <div className="flex mt-7 justify-center w-full">
                                        
                        <Link to = '/Admin'>
                            <button className="bg-indigo-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Google
                            </button>
                        </Link>
                         
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
 
    );
  }

  export default Login;