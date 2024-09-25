"use client"

import { sensitiveServerCode } from "@/utils/sensitiveServerCode"

const profile = () => {
    // sensitiveServerCode()
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default profile

//npm install server-only
//yo package le server only code , client component ma use garda talako jasto error dine vayo
//yo garnale server ma chalaune code server mai chalauna help garcha. 

//Error: 
 // × You're importing a component that needs server-only. 
 //That only works in a Server Component which is not supported in the pages/ directory