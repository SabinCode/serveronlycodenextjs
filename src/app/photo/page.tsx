// import { useState } from "react"
import { createContext } from "react"
import NameComponent from "../components/name-component"
import ThemeProvider from "../components/theme-context"

// const photo = () => {
//     const [name, setName] = useState<string>("sabin")
//     return (
//         <>
//         <div> server code
//            <div> {name}</div>
//         </div>
//         </>
//     )
// }

// export default photo

//use Client nalekhesamma yo server component hune vayo. server component ma useState use garda error aaucha.
// "use client" lekhera error handle ta garna sakincha tara yo clienet component hune vayo.
//client component vayepaxi , server component hudako faidaharu lina sakiyena. yo page ma.

//so hamile client component arko folderko file ma banayera (name-component), server component ma import garda.
//server component , server component nai huncha
//So server component ma directly useState use garera client component banaunu vanda. 
//arko client component banayera server component import garnu better



const photo = () => {

    return (
        <>
            <ThemeProvider>
                <div> server code  </div>
                <NameComponent />
            </ThemeProvider>

        </>
    )
}

export default photo    