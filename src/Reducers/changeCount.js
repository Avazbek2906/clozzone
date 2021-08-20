const changeCountReducer = (state = 0, action) =>{
    switch (action.type){
        case 'increament':
            return state+1
        case 'decreament':
            return state-1
        case 'removeAll' :
            return 0    
        default:
            return state
    }
}
export default changeCountReducer;