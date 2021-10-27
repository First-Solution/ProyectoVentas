import axios from 'axios';

const baseURL = "https://vast-falls-07175.herokuapp.com"

const getToken = ()=>{

return `Bearer ${localStorage.getItem('token')}`;
}
export const obtenerVentas = async (successCallback,errorCallback) => {
  const options = { method: 'GET', url: `${baseURL}/ventas/`,
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
  const options = { method: 'GET', url: `${baseURL}/productos/`,
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
  const options = { method: 'GET', url: `${baseURL}/usuarios/` ,
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
  const options = { method: 'GET', url: `${baseURL}/usuarios/self` ,
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
    url: `${baseURL}/usuarios/`,
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
    url: `${baseURL}/ventas/`,
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
    url: `${baseURL}/productos/`,
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









