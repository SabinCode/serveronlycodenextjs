import "server-only"

export function sensitiveServerCode() {
    console.log("serever env variables, codes")
    return "sensitive code"
}
