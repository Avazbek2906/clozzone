const changeCabinetReducer = (state = [], action) => {
    switch (action.type) {
        case 'changeCabinet':
            return [action.payload]
        default:
            return state
    }
}
export default changeCabinetReducer;