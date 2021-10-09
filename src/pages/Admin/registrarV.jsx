import React, {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import im from 'media/apreton.svg';

const ventasBackend = [
    {
      idVenta: '01',
      nombreCl: 'Camilo',
      Estado: 'Embalaje',
      correo: 'camilo@gmai.com',
      valor: 200000,
      fechaI: '22-01-2020',
      fechaF: '18-11-2021',
      responsable: 'Andrea',
      producto: 'chaqueta'
    },
    {
      idVenta: '02',
      nombreCl: 'sergio',
      Estado: 'Pendiente',
      correo: 'sergio@gmai.com',
      valor: 120000,
      fechaI: '28-10-2020',
      fechaF: '28-10-2021',
      responsable: 'Andrea',
      producto: 'chaqueta'
    },
    {
      idVenta: '03',
      nombreCl: 'alex',
      Estado: 'Entregado',
      correo: 'alex@gmai.com',
      valor: 120000,
      fechaI: '28-10-2020',
      fechaF: '28-10-2021',
      responsable: 'Andrea',
      producto: 'camisa'
    }
  ];

  const RegistroV = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true)
    const [ventas, setVentas] = useState([])
    const [textoBoton, setTextoBoton] = useState("Registrar nueva venta")
  
    useEffect(() =>{
      // obtener lista de ventas desde el back
      setVentas(ventasBackend)
  
    },[])
  
  
  
    useEffect(()=>{
      if(mostrarTabla){
        setTextoBoton("Registrar nueva venta")
      }else{
        setTextoBoton("Lista de ventas")
      }
  
    },[mostrarTabla])
  
    return(
      <div>
        <h2 className="text-3xl font-extrabold text-gray-700">Pagina de administración de ventas</h2>
        {mostrarTabla ? (<TablaVentas listaVentas = {ventas} />) :( <FormularioCrecionVentas 
        setMostrarTabla ={setMostrarTabla} 
        listaVentas={ventas}
        setVentas={setVentas}/>)}
  
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



const TablaVentas = ({ listaVentas }) => {
    useEffect(()=>{
      console.log("listado de ventas", listaVentas)
    },[listaVentas])
  
    return(
        <table className="min-w-full divide-y divide-gray-200">
     
          <thead className="bg-gray-50">
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
             Estado
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Fecha inicial
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Fecha final
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Responsable
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Producto
           </th>
     
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Editar/Eliminar
           </th>
     
          </thead>
     
          <tbody>
            {listaVentas.map((venta)=>{
              return(
               <tr>
               <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-500">{venta.idVenta}</p>
               </td>
      
               <td className="px-6 py-4 whitespace-nowrap">
                 <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={im} alt=""/>
                  </div>
      
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {venta.nombreCl}
                    </div>
                    <div className="text-sm text-gray-500">
                      {venta.correo}
                    </div>
                  </div>
      
                </div>
                 
      
               </td>
      
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {venta.valor}
      
               </td>
      
      
               <td className="px-6 py-4 whitespace-nowrap">
                 {venta.Estado}
      
                
                
               </td>
      
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{venta.fechaI}</td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{venta.fechaF}</td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{venta.responsable}</td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{venta.producto}</td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">editar/eliminar</td>
             </tr>
              )
     
     
            })}
     
          </tbody>
     
          
        </table>
       )
     }
    
     const FormularioCrecionVentas = ({setMostrarTabla, listaVentas, setVentas  }) => {

        const form = useRef(null);
        

        const submitForm = (e) => {
          
          e.preventDefault();
          const fd = new FormData(form.current);
      
          const nuevaVenta = {}
          fd.forEach((value, key) => {
            nuevaVenta[key] = value
          });
      
          setMostrarTabla(true)
          /*console.log('datos form enviados' , nuevaVenta)*/
          toast.success("Venta guardada correctamente")
          setVentas([...listaVentas, nuevaVenta])
          
        }
      
      
        return(
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-gray-500 p-2' >Registar nueva venta</h2>
      
            <form ref={form} onSubmit={submitForm} className = 'grid grid-cols-3'>
      
              <label htmlFor="id venta" className='flex flex-col'>
                ID Venta
                <input 
                name='idVenta'
                className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
                type='text' 
                />
              </label>
             
             <label htmlFor="nombre cliente" className='flex flex-col'>
               Nombre Cliente
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text' 
               name = 'nombre cliente'
               />
             </label>
      
             <label htmlFor="estado venta" className='flex flex-col'>
               Estado venta
                <select 
                  className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  name='Estado'
                  defaultValue={0}
                  >
      
                 <option disabled value={0}>Seleccione una opción</option>
                 <option >Embalaje</option>
                 <option >Entregado</option>
               </select>
             </label>
      
             <label htmlFor="correo" className='flex flex-col'>
               Correo Cliente
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text'
               name='correo'
               />
             </label>
      
             <label htmlFor="valor" className='flex flex-col'>
               Valor venta
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='number' min = '0' 
                name='valor'
               />
             </label>
      
             <label htmlFor="fecha inicial" className='flex flex-col'>
               Fecha inicial
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='date' 
               name='fechaI'
               />
             </label>
      
             <label htmlFor="fecha final" className='flex flex-col'>
               Fecha final
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
               type='date' 
               name='fechaF'
               />
             </label>
      
             <label htmlFor="" className='flex flex-col'>
               Responsable
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text'
               name='responsable'
               />
             </label>
      
             <label htmlFor="" className='flex flex-col'>
               Producto
               <input className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
               type='text' 
               name='producto'
               />
             </label>
              
              <button 
                 type='submit' 
                className= 'col-span-3 bg-indigo-400 p-2 rounded-full shadow-md hover:bg-indigo-600 text-white'
              > Registrar venta
              </button>
            </form>
            
          </div>
        )
      }


  export default RegistroV;