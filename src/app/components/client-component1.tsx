"use client"

import { Server } from "http"
import ClientComponent2 from "./client-component2"
import ServerComponent1 from "./server-Component1"


const clientComponent1 = () => {
    return (
        <div>
            <h1>client component 1</h1>
            <ClientComponent2 >
            <ServerComponent1 />
            </ClientComponent2>
        </div>
    )
}

export default clientComponent1

//client component vitra cliet component rakna milyo.
//client component vitra server component import garera rakna milyo. Tara server component client commponent hune vayo.

//client component vitra server component directly import garera use garda server component client component.
//ma change huncha. ani tyo server component ma server code lekhna mildaina.

//As a prop mathi jasari. clientcomponent2 vitra children ma pass garera pathauda chai
//server component change hudaina.