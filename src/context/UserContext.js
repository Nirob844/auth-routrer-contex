import React from 'react';
import { useState } from 'react';
import { getAuth } from 'firebase/auth'
import { createContext } from 'react';
import App from '../App';

const AuthContext = createContext();

const auth = getAuth(App)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'Nirob' });
    const authInfo = {}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}</AuthContext.Provider>
    );
};

export default UserContext;