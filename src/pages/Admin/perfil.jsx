import Perfile from 'media/perfil.png';
import react,{useState,useEffect} from "react";

const Perfil = () => {
    const UsuarioBackend = [
        {   Nombre:'Camilo',
            correo: 'Camilo@gmail.com',
            telefono: '319132133'
        }
    ];

  const [mostrarCampos,setMostrarCampos] = useState(false);
    return (
    <div class="h-full py-5 px-3">
        <div className="max-w-md mx-auto md:max-w-lg">
            <div className="w-full">
                <div className="bg-white p-3 rounded text-center ">
                    <div className="flex justify-center"> <img class="rounded-full" src={Perfile} width="100"/> </div>

                    <div className="text-center">
                        <h1 className="text-2xl mt-2">John Doe</h1>
                          
                    {mostrarCampos &&  
                            <Edision/>
                         } 
                        <div className="flex flex-row px-4 mt-4">  
                            <button onClick = {() => setMostrarCampos(!mostrarCampos)}class="h-10 w-full text-white text-md rounded bg-indigo-500 hover:bg-indigo-600 ml-2">Editar</button> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }

  const Edision = ({prop}) =>{
      return(
        <div >
      <form>
        <div className="  rounded px-8 pt-6  mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Nombre De Usuario
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder=""/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Telefono
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder=""/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
               Correo
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder=""/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
               Contraseña
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder=""/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Repetir Contraseña
              </label>
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder=""/>
            </div>
          </div>
        </div>
      </form>
    </div>
      );
  }
  export default Perfil;