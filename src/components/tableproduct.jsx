import React, {useEffect, useState, useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductoBackend = [
    {
        idProducto: '01',
        nombre: 'pantalon',
        cantidad: 10,
        valor: 120000,
        Estado: "Disponible"
    },
    {
        idProducto: '02',
        nombre: 'jeans',
        cantidad: 0,
        valor: 180000,
        Estado: "Agotado"
    },
    {
        idProducto: '19',
        nombre: 'licra',
        cantidad: 100,
        valor: 220000,
        Estado: "Disponible"
      }
  ];

  const RegistroP = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true)
    const [productos, setProductos] = useState([])
    const [textoBoton, setTextoBoton] = useState("Registrar nuevo producto")
  
    useEffect(() =>{
      // obtener lista de productos desde el back
      setProductos(ProductoBackend)
  
    },[])
  
  
  
    useEffect(()=>{
      if(mostrarTabla){
        setTextoBoton("Registrar nuevo producto")
      }else{
        setTextoBoton("Lista de productos")
      }
  
    },[mostrarTabla])
  
    return(
      <div>
        <h2 className="text-3xl font-extrabold text-gray-700">Pagina de administración de productos</h2>
        {mostrarTabla ? (<TablaProductos listaProductos = {productos} />) :( <FormularioCrecionProductos 
        setMostrarTabla ={setMostrarTabla} 
        listaProductos={productos}
        setProductos={setProductos}/>)}
  
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



const TablaProductos = ({ listaProductos }) => {
    useEffect(()=>{
      console.log("listado de productos", listaProductos)
    },[listaProductos])
  
    return(
        <table className="min-w-full divide-y divide-gray-200">
     
          <thead className="bg-gray-50">
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Id
           </th>



           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Producto
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Cantidad
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Valor
           </th>
           
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Estado
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Editar/Eliminar
           </th>
     
          </thead>
     
          <tbody>
            {listaProductos.map((producto)=>{
              return(
               <tr>
               <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-500">{producto.idProducto}</p>
               </td>
      
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.nombre}
                </td>
           
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {producto.cantidad}
      
               </td>
               
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {producto.valor}
      
               </td>
      
      
               <td className="px-6 py-4 whitespace-nowrap">
                 {producto.Estado}
               </td>
          
      
             
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">editar/eliminar</td>
             </tr>
              )
     
     
            })}
     
          </tbody>
     
          
        </table>
       )
     }
    
     const FormularioCrecionProductos = ({setMostrarTabla, listaProductos, setProductos  }) => {

        const form = useRef(null);

        const submitForm = (e) => {
          
          e.preventDefault();
          const fd = new FormData(form.current);
      
          const nuevoProducto = {}
          fd.forEach((value, key) => {
            nuevoProducto[key] = value
          });
      
          setMostrarTabla(true)
          /*console.log('datos form enviados' , nuevoProducto)*/
          toast.success("Producto guardado correctamente")
          setProductos([...listaProductos, nuevoProducto])
          
        }
      
      
        return(
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-gray-500 p-2' >Registar nuevo producto</h2>
      
            <form ref={form} onSubmit={submitForm} className = 'grid grid-cols-3'>
      
              <label htmlFor="id producto" className='flex flex-col'>
                ID 
                <input 
                name='idProducto'
                className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
                type='text' 
                />
              </label>
             
             <label htmlFor="nombre producto" className='flex flex-col'>
               Nombre Producto
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text' 
               name = 'nombre'
               />
             </label>
      
             <label htmlFor="estado producto" className='flex flex-col'>
               Estado producto
                <select 
                  className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  name='Estado'
                  defaultValue={0}
                  >
      
                 <option disabled value={0}>Seleccione una opción</option>
                 <option >Disponible</option>
                 <option >Agotado</option>
               </select>
             </label>
      
             <label htmlFor="valor" className='flex flex-col'>
               Valor
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='number' min = '0' 
                name='valor'
               />
             </label>
       
             <label htmlFor="cantidad" className='flex flex-col'>
               Cantidad
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='number' min = '0' 
                name='cantidad'
               />
             </label>
      
      
              
              <button 
                 type='submit' 
                className= 'col-span-3 bg-indigo-400 p-2 rounded-full shadow-md hover:bg-indigo-600 text-white'
              > Registrar producto
              </button>
            </form>
            
          </div>
        )
      }


  export default RegistroP;