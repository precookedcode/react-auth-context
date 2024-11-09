// src/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos para el usuario y el token
interface AuthContextProps {
    token: string | null;
    user: any | null;
    setToken: (token: string) => void;
    getToken: () => string | null;
    deleteToken: () => void;
    setUser: (user: any) => void;
    getUser: () => any | null;
    deleteUser: () => void;
}

// Definir las props para el AuthProvider
interface AuthProviderProps {
    children: ReactNode; // ReactNode permite pasar cualquier contenido JSX
}

// Crear el contexto
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Provider del contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setTokenState] = useState<string | null>(localStorage.getItem('authToken'));
    const [user, setUserState] = useState<any | null>(JSON.parse(localStorage.getItem('authUser') || 'null'));

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
        setTokenState(token);
    };

    const getToken = () => {
        return localStorage.getItem('authToken');
    };

    const deleteToken = () => {
        localStorage.removeItem('authToken');
        setTokenState(null);
    };

    const setUser = (user: any) => {
        localStorage.setItem('authUser', JSON.stringify(user));
        setUserState(user);
    };

    const getUser = () => {
        return JSON.parse(localStorage.getItem('authUser') || 'null');
    };

    const deleteUser = () => {
        localStorage.removeItem('authUser');
        setUserState(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, setToken, getToken, deleteToken, setUser, getUser, deleteUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
