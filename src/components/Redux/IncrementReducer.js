const incrementReducer=(state=0,action)=>{
    switch(action.type){
        case 'Inceremt': return state+1;
        default: return state;
    }

}
export default incrementReducer;