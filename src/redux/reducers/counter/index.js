// counter reducer notice that state is being set inside the function compared to 
// todo reducer where we set an initialState then passed state = inititalState.

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1
            case 'DECREMENT':
                return state - 1
                default:
                    return state;
    }
}

export default counterReducer;