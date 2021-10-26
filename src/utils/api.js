import axios from 'axios';

const getToken = ()=>{

return `Bearer ${localStorage.getItem('token')}`;
}
export const obtenerVentas = async (successCallback,errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/ventas/',
  headers : { 
    Authorization: getToken(),
  }, 
};
  await axios
    .request(options)
    .then(
      successCallback
      
    
    )
    .catch(
     errorCallback
    );
};
export const obtenerProductos = async (successCallback,errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/productos/',
  headers : { 
    Authorization: getToken(),
  }, };
  await axios
    .request(options)
    .then(
      successCallback
    
    )
    .catch(
     errorCallback
    );
};

export const obtenerUsuarios = async (successCallback,errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' ,
  headers : { 
    Authorization: getToken(),
  }, };
  await axios
    .request(options)
    .then(
      successCallback
  
    )
    .catch(
     errorCallback
    );
};
export const obtenerDatosUsuario = async (successCallback,errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/self' ,
  headers : { 
    Authorization: getToken(),
  }, };
  await axios
    .request(options)
    .then(
      successCallback
  
    )
    .catch(
     errorCallback
    );
};
export const crearUsuario = async(data,successCallback,errorCallback)=>{
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/usuarios/',
    headers: {  Authorization: getToken(),'Content-Type': 'application/json',
   },data,
  }
  await axios
    .request(options)
    .then(
      successCallback
    )
    .catch(
     errorCallback
    );

};
export const crearVenta = async(data,successCallback,errorCallback)=>{
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventas/',
    headers: {  Authorization: getToken(),'Content-Type': 'application/json',
   },data,
  }
  await axios
    .request(options)
    .then(
      successCallback
    )
    .catch(
     errorCallback
    );

};

export const crearProducto = async(data,successCallback,errorCallback)=>{
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/productos/',
    headers: {  Authorization: getToken(),'Content-Type': 'application/json',
   },data,
  }
  await axios
    .request(options)
    .then(
      successCallback
    )
    .catch(
     errorCallback
    );

};









