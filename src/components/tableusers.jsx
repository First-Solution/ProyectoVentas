import React, {useEffect, useState, useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UsuarioBackend = [
    {
        idUsuario: '01',
        nombreCl: 'Camilo',
        Estado: 'Activo',
        correo: 'camilo@gmai.com',
        rol: 1
    },
    {
        idUsuario: '02',
        nombreCl: 'sergio',
        Estado: 'Inactivo',
        correo: 'sergio@gmai.com',
        rol: 2
    },
  ];

  const RegistroU = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true)
    const [usuarios, setUsuarios] = useState([])
    const [textoBoton, setTextoBoton] = useState("Registrar nuevo usuario")
  
    useEffect(() =>{
      // obtener lista de usuarios desde el back
      setUsuarios(UsuarioBackend)
  
    },[])
  
  
  
    useEffect(()=>{
      if(mostrarTabla){
        setTextoBoton("Registrar nuevo usuario")
      }else{
        setTextoBoton("Lista de usuarios")
      }
  
    },[mostrarTabla])
  
    return(
      <div>
        <h2 className="text-3xl font-extrabold text-gray-700">Pagina de administración de usuarios</h2>
        {mostrarTabla ? (<TablaUsuarios listaUsuarios = {usuarios} />) :( <FormularioCrecionUsuarios 
        setMostrarTabla ={setMostrarTabla} 
        listaUsuarios={usuarios}
        setUsuarios={setUsuarios}/>)}
  
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
  
     
  
        <button  type = "button" onClick={()=>setMostrarTabla(!mostrarTabla)} className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-900 hover:bg-indigo-700">
        {textoBoton}
        </button>
      </div>
    )
  }



const TablaUsuarios = ({ listaUsuarios }) => {
    useEffect(()=>{
      console.log("listado de usuarios", listaUsuarios)
    },[listaUsuarios])
  
    return(
        <table className="min-w-full divide-y divide-gray-200">
     
          <thead className="bg-gray-50">
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Id
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Usuario
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Rol
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Estado
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Editar/Eliminar
           </th>
     
          </thead>
     
          <tbody>
            {listaUsuarios.map((usuario)=>{
              return(
               <tr>
               <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-500">{usuario.idUsuario}</p>
               </td>

               <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {usuario.nombreCl}
                    </div>
                    <div className="text-sm text-gray-500">
                      {usuario.correo}
                    </div>
                  </div>

               {/* <td className="px-6 py-4 whitespace-nowrap">
                 <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                  </div>
      
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {usuario.nombreCl}
                    </div>
                    <div className="text-sm text-gray-500">
                      {usuario.correo}
                    </div>
                  </div>
      
                </div>
                 
      
               </td> */}
      
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {usuario.rol}
      
               </td>
      
      
               <td className="px-6 py-4 whitespace-nowrap">
                 {usuario.Estado}
      
                
                
               </td>
      
             
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">editar/eliminar</td>
             </tr>
              )
     
     
            })}
     
          </tbody>
     
          
        </table>
       )
     }
    
     const FormularioCrecionUsuarios = ({setMostrarTabla, listaUsuarios, setUsuarios  }) => {

        const form = useRef(null);

        const submitForm = (e) => {
          
          e.preventDefault();
          const fd = new FormData(form.current);
      
          const nuevoUsuario = {}
          fd.forEach((value, key) => {
            nuevoUsuario[key] = value
          });
      
          setMostrarTabla(true)
          /*console.log('datos form enviados' , nuevoUsuario)*/
          toast.success("Usuario guardado correctamente")
          setUsuarios([...listaUsuarios, nuevoUsuario])
          
        }
      
      
        return(
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-gray-500 p-2' >Registar nuevo usuario</h2>
      
            <form ref={form} onSubmit={submitForm} className = 'grid grid-cols-3'>
      
              <label htmlFor="id usuario" className='flex flex-col'>
                ID 
                <input 
                name='idUsuario'
                className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
                type='text' 
                />
              </label>
             
             <label htmlFor="nombre usuario" className='flex flex-col'>
               Nombre Usuario
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text' 
               name = 'nombreCl'
               />
             </label>
      
             <label htmlFor="estado usuario" className='flex flex-col'>
               Estado usuario
                <select 
                  className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  name='Estado'
                  defaultValue={0}
                  >
      
                 <option disabled value={0}>Seleccione una opción</option>
                 <option >Activo</option>
                 <option >Inactivo</option>
               </select>
             </label>
      
             <label htmlFor="correo" className='flex flex-col'>
               Correo Usuario
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text'
               name='correo'
               />
             </label>
      
             <label htmlFor="" className='flex flex-col'>
               Teléfono usuario
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='number' min = '0' 
                name='telefono'
               />
             </label>
      
             <label htmlFor="" className='flex flex-col'>
               Fecha nacimiento
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='date' 
               name='fecha'
               />
             </label>
      
             <label htmlFor="rol" className='flex flex-col'>
               Rol
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text'
               name='rol'
               />
             </label>
      
             <label htmlFor="" className='flex flex-col'>
               Dirección
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text' 
               name='direccion'
               />
             </label>
              
              <button 
                 type='submit' 
                className= 'col-span-3 bg-indigo-400 p-2 rounded-full shadow-md hover:bg-indigo-600 text-white'
              > Registrar usuario
              </button>
            </form>
            
          </div>
        )
      }


  export default RegistroU;