const changeCategoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'changeCategory':
            return action.payload
        default:
            return state
    }
}
export default changeCategoryReducer;