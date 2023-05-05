import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const  AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createUserByGoogle = () => signInWithPopup(auth, googleProvider); 
    const createUserByGitHub = () => signInWithPopup(auth, googleProvider); 

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

 
    const authInfo = {
        user,
        loading,
        createUser,
        createUserByGoogle,
        createUserByGitHub,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authIfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;