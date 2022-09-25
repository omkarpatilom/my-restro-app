const increament=()=>{
    return {
        type:'Increment',
        payload:1
    }
}

const decreament=()=>{
    return {
        type:'Decrement',
        payload:1
    }
}

export {increament,decreament};