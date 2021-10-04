import { Link } from "react-router-dom";
import react,{useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
function EditU() {
  const [Nombre,setNombre] = useState("");
  const [id,setId] = useState("");
  const [fecha,setFecha] = useState("");
  const [direccion,setDireccion] = useState("");
  const [telefono,setTelefono] = useState("");
  const [foto,setFoto] = useState("");
  const [estado,setestado] = useState("");

  useEffect(()=>{
  },[Nombre,id,fecha,direccion,telefono,foto,estado]);

  const EnviarAlback = () =>{
    console.log("nombre ",Nombre);
    console.log("Identificacion ",id);
    console.log("fecha ",fecha);
    console.log("direccion ",direccion);
    console.log("telefono ",telefono);
    console.log("foto",foto);
    console.log("estado",estado);
    toast.success('🤡 Usuario Editado correctamente!', {
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
        <h1 className = "text-gray-600  mx-auto text-center text-3xl py-3 font-semibold text-opacity-75">Editar Usuario</h1>
      <form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Nombre De Usuario
              </label>
              <input onChange = { (e) => {
                setNombre(e.target.value);
              }
              }vale = {Nombre}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Example name"/>

            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                ID
              </label>
              <input onChange = { (e) => {
                setId(e.target.value);
              }
              }vale = {id}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="1000000"/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Fecha Nacimiento
              </label>
              <input onChange = { (e) => {
                setFecha(e.target.value);
              }
              }vale = {fecha}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="date" placeholder="1000000"/>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Direccion
              </label>
              <input onChange = { (e) => {
                setDireccion(e.target.value);
              }
              }vale = {direccion}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Carrera 1 # 1·1"/>
            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Telefono
              </label>
              <input onChange = { (e) => {
                setTelefono(e.target.value);
              }
              }vale = {telefono}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="10"/>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                Foto Perfil
              </label>
              <input onChange = { (e) => {
                setFoto(e.target.value);
              }
              }vale = {foto}className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="file" />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                Estado
              </label>
              <select className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"  name="Estado" onChange = { (e) => {
                setestado(e.target.value);
              }
              }value = {estado}>
                            <option>Selecciona una opción</option>
                            <option>Activo</option>
                            <option>Inactivo</option>
                            
              </select>
            </div>
          </div>
        <div className="-mx-3 md:flex mt-2">
          <div className="min-w-full md:flex md:flex-1 lg:w-0 py-2">
          <button onClick ={EnviarAlback}type="button"className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Editar
              </button>
              <div className = "px-7">

              <Link to='/Admin/Usuarios'>
              <button type="button" className="sm:auto mx-auto ml-8 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Usuarios
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

  export default EditU;