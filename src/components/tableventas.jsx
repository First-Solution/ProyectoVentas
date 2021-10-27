import React, {useEffect, useState, useRef} from "react";
import im from 'media/apreton.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { obtenerVentas } from 'utils/api'
import {Dialog, Tooltip} from '@material-ui/core'
import { crearVenta } from "utils/api";

import PrivateComponent from "components/PrivateComponent";


const RegistroV = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true)
  const [ventas, setVentas] = useState([])
  const [textoBoton, setTextoBoton] = useState("Registrar nueva venta")
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true)


  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(
        (response)=> {
          setVentas(response.data)
        },
        (error)=> {
          console.error(error);
        }
        );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);


  useEffect(() => {
    //obtener lista de ventas desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);



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
      {mostrarTabla ? (<TablaVentas listaVentas = {ventas} setEjecutarConsulta={setEjecutarConsulta} />) :( <FormularioCrecionVentas 
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

const FilaVenta= ({ venta, setEjecutarConsulta }) => {

  const baseURL = "https://vast-falls-07175.herokuapp.com"

  const [edit, setEdit] = useState(false)
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
    idVenta: venta.idVenta,
    nombreCl: venta.nombreCl,
    Estado: venta.Estado,
    correo: venta.correo,
    valor: venta.valor,
    fechaI: venta.fechaI,
    fechaF: venta.fechaF,
    responsable: venta.responsable,
    producto: venta.producto
  });

  const actualizarVenta = async () => {
    const options = {
      method: 'PATCH',
      url: `${baseURL}/ventas/${venta._id}/`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json' },
      data: { ...infoNuevaVenta},
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Venta modificada con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error al modificar la venta');
        console.error(error);
      });
  };

  const eliminarVenta = async () => {
    const options = {
      method: 'DELETE',
      url: `${baseURL}/ventas/${venta._id}/`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json' },
      data: { id: venta._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('venta eliminada con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error al eliminar la venta');
      });
    setOpenDialog(false);
  };

  

  return(
    <tr>
      {edit ? (
        <>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text' 
              value={infoNuevaVenta.idVenta}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, name: e.target.value })}
            />
          </td>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text' 
              value={infoNuevaVenta.nombreCl}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nombreCl: e.target.value })}
            />
          </td>
          <td>
          <select 
            className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='Estado'
            value={infoNuevaVenta.Estado}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, Estado: e.target.value })}
            >

           <option disabled value={0}>Seleccione una opción</option>
           <option >Embalaje</option>
           <option >Entregado</option>
         </select>
          </td>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text'
              value={infoNuevaVenta.correo}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, correo: e.target.value })} 
            />
          </td>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text' 
              value={infoNuevaVenta.valor}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, valor: e.target.value })} 
            />
          </td>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text'
              value={infoNuevaVenta.fechaI}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fechaI: e.target.value })}  
            />
          </td>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text' 
              value={infoNuevaVenta.fechaF}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fechaF: e.target.value })} 
            />
          </td>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text' 
              value={infoNuevaVenta.responsable}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, responsable: e.target.value})} 
            />
          </td>
          <td>
            <input 
              className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
              type='text' 
              value={infoNuevaVenta.producto}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, producto: e.target.value})} 
            />
          </td>
        </>
      ) : (
        <>

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
                { venta.Estado === "Embalaje" ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  {venta.Estado}
                    </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {venta.Estado}
                    </span>
                    }
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {venta.fechaI}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {venta.fechaF}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {venta.responsable}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {venta.producto}
            </td>
        </>
      )}
      <PrivateComponent roleList = {['Admin']}>   
      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarVenta()}
                  className='fas fa-check text-green-700 hover:text-green-500'
                />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title='Editar Venta' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt hover:text-blue-500'
                />
              </Tooltip>
              <Tooltip title='Eliminar Venta' arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className='fas fa-trash hover:text-red-500'
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar la venta?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => eliminarVenta()}
                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
      </PrivateComponent>   
    </tr>

    

  )
}


const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

  useEffect(() => {
    setVentasFiltradas(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);


  /*useEffect(()=>{
    console.log("listado de ventas", listaVentas)
  },[listaVentas])*/

  return(
    <div>
        <input 
        type="text" 
        placeholder="Buscar" 
        className = 'bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        />

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
          <PrivateComponent roleList = {['Admin']}>   
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Editar/Eliminar
          </th>
          </PrivateComponent>   
          </thead>

          <tbody>
            {ventasFiltradas.map((venta)=>{
              return(
                <FilaVenta key={nanoid()} venta={venta} setEjecutarConsulta = {setEjecutarConsulta} />

              )

            })}

          </tbody>


          </table>


    </div>


 
  )
}


const FormularioCrecionVentas = ({setMostrarTabla, listaVentas, setVentas  }) => {

  const form = useRef(null);
  
  

  

  const submitForm = async (e) => {
    
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
      console.log(nuevaVenta[key], key)
    });
    await crearVenta(
      {
        idVenta: nuevaVenta.idVenta,
        nombreCl: nuevaVenta.nombreCl,
        Estado: nuevaVenta.Estado,
        correo: nuevaVenta.correo,
        valor: nuevaVenta.valor,
        fechaI: nuevaVenta.fechaI,
        fechaF: nuevaVenta.fechaF,
        responsable: nuevaVenta.responsable,
        producto: nuevaVenta.producto,
    },
     
     (response)=>{
       console.log(response.data)
       toast.success('Venta Registrada Con Exito');
       obtenerVentas(
        (response)=> {
          setVentas(response.data)
        },
        (error)=> {
          console.error(error);
        }
        );

        
      },
     (error)=>{
       console.log(error)
     toast.error('Error En la creacion de la venta');
     }
     );
    
  
    

    setMostrarTabla(true);
  };

   

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
         name = 'nombreCl'
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