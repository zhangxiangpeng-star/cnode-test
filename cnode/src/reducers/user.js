function user(state={
    data:{
        avatar_url:"",
        create_at:'',
        loginname:"",
        score:'',
        recent_replies:[],
        recent_topics:[]
    },
},action){
    switch(action.type){
        case "USER_UPDATA":
            return {
                data: state.data
            }
        case "USER_UPDATA_SUCC":
            return {
                data: action.data.data
            }
            case "USER_UPDATA_ERROR":
                return {
                    data:{
                        avatar_url:"",
                        create_at:'',
                        loginname:"",
                        score:'',
                        recent_replies:[],
                        recent_topics:[]
                    },
                }
        default:
            return state;
    }
}
export default user;