"use client"
const ClientComponent2 = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h1>client component 2</h1>
            <div>{children}</div>
        </div>
    )
}

export default ClientComponent2

//children props pass garepaxi hamile , <ClientComponent2> <ServerComponent1/> yeha servercomponent1 as a children
// pass garera <ClientComponent2> close garna sakincha.
//e.g in ClientComponent1.