import { Link } from "react-router-dom";
import react ,{useEffect,useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
const RegistroV = () => {
  const [idEncargado,setidEncargado] = useState ("");
  const [idVenta,setidVenta] = useState ("");
  const [idComprador,setidComprador] = useState ("");
  const [nombreComprador,setnombreComprador] = useState("");
  const [producto,setproducto] = useState ("");
  const [cantidad,setcantidad] = useState (0);
  const [fechainicio,setfechainicio] = useState ("");
  const [fechafinal,setfechafinal] = useState ("");
  const [estado,setestado] = useState ("");
  useEffect(()=>{
  },[idEncargado,idVenta,idComprador,nombreComprador,producto,cantidad,fechainicio,fechafinal,estado]);

  const EnviarAlback = () =>{
    console.log("Id encargado ",idEncargado);
    console.log("Id Venta ",idVenta);
    console.log("Id Comprador ",idComprador);
    console.log("Nombre comprador ",nombreComprador);
    console.log("Producto ",producto);
    console.log("cantidad ",cantidad);
    console.log("fecha inicio ",fechainicio);
    console.log("fecha final",fechafinal);
    console.log("estado",estado);

    toast.success('🤡 Venta Registrado correctamente!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
  };

    return (
      <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <h1 className = "text-gray-600  mx-auto text-center text-3xl py-3 font-semibold text-opacity-75">Registro Ventas</h1>
      <form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
       
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                 ID Encargado
              </label>
              <input onChange = { (e) => {
                setidEncargado(e.target.value);
              }
              }value = {idEncargado}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Id"/>

            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                ID Venta
              </label>
              <input onChange = { (e) => {
                setidVenta(e.target.value);
              }
              }value = {idVenta}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Id"/>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                 ID COMPRADOR
              </label>
              <input onChange = { (e) => {
                setidComprador(e.target.value);
              }
              }value = {idComprador}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Id"/>

            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Nombre Comprador
              </label>
              <input onChange = { (e) => {
                setnombreComprador(e.target.value);
              }
              }value = {nombreComprador}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Nombre"/>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Id Producto
              </label>
              <input onChange = { (e) => {
                setproducto(e.target.value);
              }
              }value = {producto}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Product"/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Cantidad
              </label>
              <input onChange = { (e) => {
                setcantidad(e.target.value);
              }
              }value = {cantidad}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="number" placeholder="Cantidad"/>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Fecha Inicio
              </label>
              <input onChange = { (e) => {
                setfechainicio(e.target.value);
              }
              }value = {fechainicio}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="date" placeholder="10"/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Fecha Final
              </label>
              <input  onChange = { (e) => {
                setfechafinal(e.target.value);
              }
              }value = {fechafinal}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="date" placeholder="10"/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Estado
              </label>
              <select className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"  name="Estado" onChange = { (e) => {
                setestado(e.target.value);
              }
              }value = {estado}>
                            <option>Selecciona una opción</option>
                            <option>Embalaje</option>
                            <option>Pendiente</option>
                            <option>Enviado</option>
                            <option>Recibido</option>
                            <option>Cancelado</option>
                            
              </select>
            </div>
          </div>
          <div className="-mx-3 md:flex mt-2">
          <div className="min-w-full md:flex md:flex-1 lg:w-0 py-2">
              
              <button  type = "button" onClick = {EnviarAlback} className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Registrar
              </button>
             
             <Link to='/Admin/Ventas'>
              <button type="button" className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Ventas
              </button>
              </Link>
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

  export default RegistroV;