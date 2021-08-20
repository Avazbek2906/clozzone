const changeCartReducer = (state = [], action) => {
    switch (action.type) {
        case 'addCart':
            return [...state, action.payload]
        case 'removeCart':
            return state.filter(el=>el.id!==action.payload) 
        case 'proceedCart':
            return []  
        default:
            return state 
        
    }
}
export default changeCartReducer;