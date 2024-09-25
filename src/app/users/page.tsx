"use client"
type Users= {
    id: string
    name: string
    
}
const Users= async () => {
    const response = await fetch("https://66d1dcd162816af9a4f51950.mockapi.io/users")
    const data = await response.json()
    return (
        <div>
            <h1>Users</h1>
            {data.map((user: Users) => (
                <div key={user.id}>
                    <h5>{user.name}</h5>
                </div>
            ))}
        </div>
    )
}

export default Users