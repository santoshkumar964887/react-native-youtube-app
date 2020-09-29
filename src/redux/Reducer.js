const initialState=[]
export const Reducer=(state=initialState,action)=>{
    if(action.type=='Add_Search'){
        state=action.payload
        return state;
    }
    return state;
}