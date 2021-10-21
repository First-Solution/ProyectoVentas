import { useAuth0 } from "@auth0/auth0-react";
import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
const PrivateRoute = ({children})=>{
    const { user, isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently } = useAuth0(); 
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
    }
            if(isAuthenticated){
                
                fetchAuth0Token();
            }
   },[isAuthenticated,getAccessTokenSilently]);
   
   
   
   
    if(isLoading)return <div><ReactLoading type={"cylon"} color={"#818CF8"} height={667} width={375} /></div>
   if(!isAuthenticated){
       return loginWithRedirect();
   }
   return<>{children}</>
   // return isAuthenticated ? <>{children}</>:<div><div className ="text-9xl text-red-500">No estás autorizado para ver este sitio</div><Link to ="/" >Llevame Al Login</Link></div>

}
export default PrivateRoute;