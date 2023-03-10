import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({children}) => {
const [user, setUser] = useState({});
const [loading, setLoading] = useState(true);

const providerLogin = (provider) =>{
    setLoading(true)
    return signInWithPopup(auth, provider);
}

const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn =(email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile);
}

const logout = () =>{
    setLoading(true)
    return signOut(auth);
}

useEffect(()=> {
    const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
    })

    return() => {
        unsubscribe();
    }
},[])

const authInfo = {
    user, 
    providerLogin,
    createUser,
    loading,
    signIn,
    updateUserProfile,
    logout
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;