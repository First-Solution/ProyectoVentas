import { useAuth0 } from "@auth0/auth0-react";
import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from "utils/api";
import { Redirect } from 'react-router';
import { useUser } from "./context/userContext";
const PrivateRoute = ({roleList,children})=>{

    const {userData} = useUser();
    console.log("User DATA en el PRIVATE Rout",userData);
    const { user, isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently ,logout} = useAuth0(); 
    const {setUserData} = useUser();
   useEffect(()=>{
    const fetchAuth0Token = async ()=>{
        if(localStorage.getItem('token')){

        }else{

        }
        const accessToken = await getAccessTokenSilently({
            audience : 'api-autenticacion-ventas-mintic',
            
        });
        localStorage.setItem('token',accessToken);
        console.log(accessToken);
        await obtenerDatosUsuario((response)=>{

            setUserData(response.data);
        },
        (err)=>{
                logout({ returnTo: 'http://localhost:3000/' })
        }
        );
    }
            if(isAuthenticated){
                
                fetchAuth0Token();
            }
   },[isAuthenticated,getAccessTokenSilently]);
   
   
   
   
    if(isLoading){
        return <div><ReactLoading type={"cylon"} color={"#818CF8"} height={667} width={375} /></div>
    }
   if(!isAuthenticated){
       return loginWithRedirect();
    }
   if(roleList.includes(userData.rol)){
    return (
        children
    );
    
}
if(!roleList.includes(userData.rol)){
    return(

        <div>
        {userData.rol ==='Vendedor'?
        <Redirect to="/Vendedor" />:
        userData.rol ==='Admin'?
        <Redirect to="/Admin" />:
        <div></div>
        }
        </div>
    
);
}
return(<></>);
}
   // return isAuthenticated ? <>{children}</>:<div><div className ="text-9xl text-red-500">No estás autorizado para ver este sitio</div><Link to ="/" >Llevame Al Login</Link></div>


export default PrivateRoute;
/*{userData.rol ==='Vendedor'?
        <Redirect to="/Vendedor" />:
        userData.rol ==='Admin'?
        <Redirect to="/Admin" />:
        <Redirect to="/" />
        }*/