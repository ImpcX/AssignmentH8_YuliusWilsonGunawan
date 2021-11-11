import { createStore } from "redux";

const initialState = {
    add: [],
    done: []
};

const data_store = (state= initialState, action) =>
{
    switch (action.type)
    {
        case "ADD":
            return {
                ...state,
                add: [...state.add, action.payload],
            };

        case "DELETE":
            return {
                ...state,
                add: action.payload
            };

        case "DONE":
            return {
                ...state,
                add: action.payload
            };
        
        default:
            return state;
    }
};

const store = createStore(data_store);

export default store;