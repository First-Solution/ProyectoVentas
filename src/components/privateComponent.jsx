import React from 'react';
import { useUser } from './context/userContext';
import IndexA from 'pages/Admin/index';
import Index from 'pages'; 
import IndexV from 'pages/Vendedor/index';
const PrivateComponent = ({roleList,children}) =>{
    const {userData} = useUser();
    console.log("User DATA en el PRIVATE COMPONENT",userData);
   if(roleList.includes(userData.rol)){
        return (
            children
        );
   }
  
    return(
            <div>
                
            </div>
    );

    }
export default PrivateComponent
//{(userData.rol ="Admin")?
//<IndexA></IndexA>:
//userData.rol = "Vendedor"? <IndexV></IndexV>:
// <Index></Index>
//}