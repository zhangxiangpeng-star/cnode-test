function list(state={
    loading:true,
    data:[]
}
,action){
    switch(action.type){
        case "LIST_UPDATA_SUCC":
            console.log(action.data);
            return {
                data:action.data.data
            }
        case "LIST_UPDATA_ERROR":
        return {
            data:[]
        }
        default:
            return state;
    }
}
export default list;