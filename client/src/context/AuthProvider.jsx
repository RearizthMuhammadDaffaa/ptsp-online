import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        try {
            const storedAuth = localStorage.getItem("authuser");
            return storedAuth ? JSON.parse(storedAuth) : { roles: [], user: null };
        } catch (e) {
            console.error("Error accessing localStorage:", e);
            return { roles: [], user: null };
        }
    });

    useEffect(() => {
        try {
            if (auth && Object.keys(auth).length > 0) {
                localStorage.setItem("authuser", JSON.stringify(auth));
            } else {
                localStorage.removeItem("authuser");
            }
        } catch (e) {
            console.error("Error setting localStorage:", e);
        }
    }, [auth]);

    

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;