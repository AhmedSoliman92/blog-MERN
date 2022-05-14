export const Login = (credential)=>{
    type:"LOGIN"
}

export const SUCCESS_LOGIN=(user)=>({
    type:"SUCCESS_LOGIN",
    payload :user
})

export const FAILUIRE_LOGIN = (err)=>({
    type:"FAILUIRE_LOGIN",
    payload :err
})