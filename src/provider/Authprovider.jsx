import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FirebaseConfig';
import usePublicAxios from '../Hooks/usePublicAxios';
export const authcontext=createContext();
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loader,setloader]=useState(true);
    const googleprovider = new GoogleAuthProvider();
    const axiospublic=usePublicAxios();
    const creatuser=(email,password)=>{
        setloader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setuser(currentuser)
            if(currentuser){
               const userinfo={email:currentuser.email}
               axiospublic.post('/jwt',userinfo)
               .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }
               })
            }
            else{
           localStorage.removeItem('access-token')
            }
            setloader(false)
        })
        return ()=>unsubscribe()
    },[])
    const login=(email,password)=>{
        setloader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googlesignin=()=>{
        setloader(true)
        return signInWithPopup(auth,googleprovider)
    }
    const logout=()=>{
        setloader(true)
        return signOut(auth)
    }
    const updateprofile=(name,photo)=>{

     return updateProfile(auth.currentUser, {
  displayName:name, photoURL:photo
})
    }
    const authinfo={
            creatuser,
            user,
            login,
            loader,
            logout,
            updateprofile,
            googlesignin
    }
    return (
        <authcontext.Provider value={authinfo}>
      {children}
        </authcontext.Provider>
    );
};

export default Authprovider;