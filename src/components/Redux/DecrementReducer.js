const decrementReducer=(state=0,action)=>{
    switch(action.type){
        case 'deceremt': return state-1;
        default: return state;
    }

}
export default decrementReducer;