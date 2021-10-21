import { useAuth0 } from "@auth0/auth0-react";
import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
const PrivateRoute = ({children})=>{
    const { user, isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently } = useAuth0(); 
   useEffect(()=>{
    const fetchAuth0Token = async ()=>{
        const accessToken = await getAccessTokenSilently({
            audience : 'api-autenticacion-ventas-mintic',
            
        });
        console.log(accessToken);
    }
   
    fetchAuth0Token();
   },[]);
   
   
   
   
    if(isLoading)return <div>Loading</div>
   if(!isAuthenticated){
       return loginWithRedirect();
   }
   return<>{children}</>
   // return isAuthenticated ? <>{children}</>:<div><div className ="text-9xl text-red-500">No estás autorizado para ver este sitio</div><Link to ="/" >Llevame Al Login</Link></div>

}
export default PrivateRoute;