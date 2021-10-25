import React from 'react';
import { useUser } from './context/userContext';
import IndexA from 'pages/Admin/index';
import Index from 'pages'; 
import IndexV from 'pages/Vendedor/index';
const PrivateRoute = ({roleList,children}) =>{
    const {userData} = useUser();
    console.log("User DATA en el PRIVATE COMPONENT",userData);
   if(roleList.includes(userData.rol)){
        return (
            children
        );
   }
  
    return(
            
               <div><div className ="text-9xl text-red-500">No estás autorizado para ver este sitio</div>
               
               </div>
            

    );

    }
export default PrivateRoute
/*
 {(userData.rol ="Admin")?
               <Link to ="/Admin" ></Link>:
                userData.rol = "Vendedor"? <Link to ="/Vendedor" ></Link>:
                <Link to ="/" ></Link>
                }
                
                const { user, isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently } = useAuth0(); 
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
        await obtenerDatosUsuario(
            (response)=>{
            setUserData(response.data);
        },
        (err)=>{
            console.log('err',err);
        }
        );
    }
            if(isAuthenticated){
                
                fetchAuth0Token();
            }
   },[isAuthenticated,getAccessTokenSilently]);
   
   
   
   
    if(isLoading)return <div><ReactLoading type={"cylon"} color={"#818CF8"} height={667} width={375} /></div>
   if(!isAuthenticated){
       return loginWithRedirect();
   }
   return<>{children}</>*/
   // return isAuthenticated ? <>{children}</>:<div><div className ="text-9xl text-red-500">No estás autorizado para ver este sitio</div><Link to ="/" >Llevame Al Login</Link></div>