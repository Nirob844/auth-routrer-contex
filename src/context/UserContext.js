import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { createContext } from 'react';
import App from '../App';

export const AuthContext = createContext();

const auth = getAuth(App);


const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'Nirob' });

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = { user, createUser, signIn }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;