import Header from "components/headeradminuser";
import Footer from "components/footer";
import { useAuth0 } from "@auth0/auth0-react";
import React, {useEffect,useState} from "react";

import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from "utils/api";
import { useUser } from "components/context/userContext";
import PrivateRoute from 'components/PrivateRoute'


const LayoutU = ({children}) => {

  const { isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently } = useAuth0(); 
  const [loadingUserInformation,setLoadingUserInformation] = useState(false);
    const {setUserData} = useUser();
   useEffect(()=>{
    const fetchAuth0Token = async ()=>{
        
        setLoadingUserInformation(true);
        const accessToken = await getAccessTokenSilently({
            audience : 'api-autenticacion-ventas-mintic',
            
        });
        localStorage.setItem('token',accessToken);
        await obtenerDatosUsuario(
            (response)=>{
            setUserData(response.data);
            setLoadingUserInformation(true);
        },
        (err)=>{
            console.log('err',err);
            setLoadingUserInformation(false);
        }
        );
    }
            if(isAuthenticated){
                
                fetchAuth0Token();
            }
   },[isAuthenticated,getAccessTokenSilently]);
   
   
   
   
  if(isLoading||loadingUserInformation)return <div><ReactLoading type={"cylon"} color={"#818CF8"} height={667} width={375} /></div>
  if(!isAuthenticated){
       return loginWithRedirect();
   }
   
   // return isAuthenticated ? <>{children}</>:<div><div className ="text-9xl text-red-500">No estás autorizado para ver este sitio</div><Link to ="/" >Llevame Al Login</Link></div>
    return(
        <div className= "Maincontainer max-w-7xl mx-auto px-4 py-6 sm:px-6">

        <Header/>
        <main >
          {children}
        </main>
          <Footer/>
      </div>
    );
}
export default LayoutU;