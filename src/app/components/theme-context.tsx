"use client"

import { createContext } from "react"

const ThemeContext = createContext("light")
const ThemeProvider = ({children}: {children: React.ReactNode}) => {
        return (
            <>
            <ThemeContext.Provider value="dark">
                     {children}
            </ThemeContext.Provider>
            
            </>
        )

}

export default ThemeProvider
//this is client component which we can use in server component.
//We r using this in client component in Photo Server component.