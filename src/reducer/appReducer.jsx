export const initialState = {
    data: [],
    sectorList: [],
    isEdit: false,
    editId: null,
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return { ...state, data: [...state.data, action.payload] };
        case "GET_DATA":
            return { ...state, data: action.payload };
        case "EDIT_DATA":
            return {
                ...state,
                isEdit: true,
                editId: action.payload,
            };
        case "UPDATE_DATA":
            const newData = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        id: action.payload.id,
                        name: action.payload.name,
                        sectors: action.payload.sectors,
                    };
                } else {
                    return item;
                }
            });
            console.log(newData);
            return {
                ...state,
                data: newData,
                isEdit: false,
                editId: null,
            };
        default:
            return state;
    }
};
