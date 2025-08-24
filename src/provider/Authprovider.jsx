import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FirebaseConfig';
export const authcontext=createContext();
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loader,setloader]=useState(true);
    const creatuser=(email,password)=>{
        setloader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setuser(currentuser)
            setloader(false)
        })
        return ()=>unsubscribe()
    },[])
    const login=(email,password)=>{
        setloader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setloader(true)
        return signOut(auth)
    }
    const updateprofile=(name,photo)=>{
        setloader(true)
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
    }
    return (
        <authcontext.Provider value={authinfo}>
      {children}
        </authcontext.Provider>
    );
};

export default Authprovider;