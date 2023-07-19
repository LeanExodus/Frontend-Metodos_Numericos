import { useSession } from "@/hooks/useSession";
import React, { createContext, useState } from "react";

export const SessionContext = createContext<{
    jwt: string;
    isLogged: boolean;
    logIn: (jwt: string) => void;
    logOut: () => void;
}>({
    jwt: "",
    isLogged: false,
    logIn: (jwt: string) => { },
    logOut: () => { },
});


export const SessionProvider = ({ children }: { children: React.ReactNode }) => {

    const session = useSession()

    return (
        <SessionContext.Provider value={session}>

            {children}

        </SessionContext.Provider>
    );
};