import { Link } from "react-router-dom";
import React , {useEffect,useState,useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegistroP = () => {
  const [nombreProducto,setNombreProducto]=useState("");
  const [idProducto,setidProducto]=useState("");
  const [valorProducto,setvalorProducto]=useState(0);
  const [cantidadProducto,setcantidadProducto]=useState(0);

        const EnviarAlback = () =>{
          console.log("El nombre del producto es",nombreProducto);
          console.log("El id del producto es",idProducto);
          console.log("El valor del producto es",valorProducto);
          console.log("La cantidad del producto es",cantidadProducto);

          toast.success('🤡 Producto Registrado correctamente!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            });
        };

    return (
      
      <div className=" mx-auto max-w-6xl py-20 px-12 lg:px-24 shadow-xl mb-24">
        
        <h1 className = "text-gray-600  mx-auto text-center text-3xl py-3 font-semibold text-opacity-75">Registro Productos</h1>
      <form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Nombre De Producto
              </label>
              <input onChange={ (e) =>{
                setNombreProducto(e.target.value);
              }}
              required value={nombreProducto}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Product"/>

            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                ID
              </label>
              <input onChange ={(e) =>{
                setidProducto(e.target.value);
              }} required  vale = {idProducto}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="P10"/>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Valor
              </label>
              <input onChange ={(e) =>{
                setvalorProducto(e.target.value);
              }}required vale = {valorProducto}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="number" placeholder="Valor U/N"/>

            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Cantidad
              </label>
              <input onChange ={(e) =>{
                setcantidadProducto(e.target.value);
              }}required vale = {cantidadProducto}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="number" placeholder="10"/>
            </div>
          </div>
          <div className="-mx-3 md:flex mt-2">
          <div className="min-w-full md:flex md:flex-1 lg:w-0  py-2">
              
              <button type="submit" onClick= {EnviarAlback}className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Registrar
              </button>
              <div className = "px-7">

              <Link to='/Admin/Productos'>
              <button type="button" className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Productos
              </button>
              </Link>
              </div>
       </div>
          </div>
          <ToastContainer
              position="bottom-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
        </div>
      </form>
              
    </div>
    );
  }

  export default RegistroP;
