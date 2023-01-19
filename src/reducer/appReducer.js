export const initialState = {
    data: [],
    sectorList: [],
};

export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'TEST':
            console.log(action.payload);
            return state;
        default:
            return state;
    }
}
