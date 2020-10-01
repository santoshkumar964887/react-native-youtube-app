const initialState=false;
export const ThemeReducer=(state=initialState,action)=>{
    if(action.type==="Change_Theme"){
        return !state;
    }
    return state;
}