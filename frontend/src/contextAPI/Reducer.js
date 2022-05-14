const Reducer = (state, action)=>{
    switch(action.type){
        case "LOGIN":{
            return {
                user: null,
                loading: true,
                error:''
            }
        }
        case "SUCCESS_LOGIN":{
            return{
                user: action.payload,
                loading: false,
                error: ''
            }
        }
        case "FAILUIRE_LOGIN":{
            return {
                user:null,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state
    }

};


export default Reducer;