import { ActionTypes } from "../Contants/ActionType"


const initialState = {
    products: [],
    // products: [
    //     {
    //         id: 1,
    //         title: "Software Developer",
    //         category: "Programmer"
    //     },
    // ],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const SelectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}



