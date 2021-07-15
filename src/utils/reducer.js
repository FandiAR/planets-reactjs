const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PLANETS':
            return {
                ...state,
                planets: action.payload
            };
        case 'SET_WHISLIT':
            return {
                ...state,
                whislist: action.payload
            };
        default:
            return state;
    }
};
export default Reducer;
