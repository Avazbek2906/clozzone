const changeBreadcumbReducer = (state = "", action) => {
    switch (action.type) {
        case 'changeBreadcumb':
            return action.payload
        default:
            return state
    }
}
export default changeBreadcumbReducer;