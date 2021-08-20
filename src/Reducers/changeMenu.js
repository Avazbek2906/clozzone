const changeMenuReducer = (state = "", action) => {
    switch (action.type) {
        case 'changeMenu':
            return action.payload
        default:
            return state
    }
}
export default changeMenuReducer;