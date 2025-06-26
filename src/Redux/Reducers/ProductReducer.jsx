import { ActionTypes } from "../Contants/ActionType"


const initialState = {
    products: [
        {
            id: 1,
            title: "Software Developer",
            category: "Programmer"
        },
    ],
};

export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}