import React, {ReactChildren, useEffect} from 'react';
import { useRouter } from 'next/router';

const isAuthenticated = ()=>{
    const userToken = localStorage.getItem('token')
    if(userToken){return true}
}
const ProtectedRoute = ({children}: {children?: any})=>{
    const router= useRouter();
    useEffect(()=>{
        if(!isAuthenticated()){
            router.replace("/pages/login")
        }
    },[])
   
    return(
        <>
        {children}
        </>
    )
}

export default ProtectedRoute;