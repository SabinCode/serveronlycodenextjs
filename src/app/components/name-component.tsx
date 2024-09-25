
"use client"

import { useState } from "react"

const NameComponent = () => {
    const [name, setName] = useState<string>("sabin")
    return (
        <>
            <div>{name}</div>
        </>
    )
}

export default NameComponent