const changeButtonReducer = (state = [], action) => {
    switch (action.type) {
        case 'addCart_button':
            return [...state, action.payload]

        case 'removeCart_button':
            return state.filter(el => el !== action.payload)
        case 'proceedCart_button':
            return []
        default:
            return state

    }
}
export default changeButtonReducer;