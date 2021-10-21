import axios from 'axios';


export const obtenerVentas = async (successCallback,errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/ventas/',
  headers : { 
    Autorization:
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlBKc3Y5OHpxMjlDMFRnYXlvU0RFeiJ9.eyJpc3MiOiJodHRwczovL2ZpcnN0c29sdXRpb24tcHJveXZlbnRhcy51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjE3MGZmYWFjNjllYjIwMDcwNTI3N2ZlIiwiYXVkIjpbImFwaS1hdXRlbnRpY2FjaW9uLXZlbnRhcy1taW50aWMiLCJodHRwczovL2ZpcnN0c29sdXRpb24tcHJveXZlbnRhcy51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjM0ODAyOTk5LCJleHAiOjE2MzQ4ODkzOTksImF6cCI6IlQwREJmT1VsZ1NDMHNWOVFiY1R4RnRXeDFtTElOS0pwIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.CrxAVrNpLG7G9aPcTn-Nlx2yPdPq4soDGc15YDORkrvo4DnNuEdMXdsNLcbyP7e17I-Eg4eS7m7ZQ5YXKcb143h2eonyC-BAAxK_gx0Fyt_Skc4vh5tpxYeYpPcbn5V5FDGCtJazp5AStYwf94Re2HJ2jyEfMlsgdN8OqZ4v0_Co_rPGamsySqxQBCRmMoytne5yC73ZzENqA8eS8ypoSVvAKxFQahynUjQZl01T5AphUopf59pOLC7bOklZV1iYb4JMRZ62IDIiRdMmuuz6MHVe36qWHVDNVR_GEWb6CSlUE78LTYxW6uZV_cT6_Lpg0FuiROdu76ParJ0u_ripKg',
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
  const options = { method: 'GET', url: 'http://localhost:5000/productos/' };
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
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };
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
    headers: { 'Content-Type': 'application/json',
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
    headers: { 'Content-Type': 'application/json',
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
    headers: { 'Content-Type': 'application/json',
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
export const editarProducto = async(data,successCallback,errorCallback)=>{
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/productos/',
    headers: { 'Content-Type': 'application/json',
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








