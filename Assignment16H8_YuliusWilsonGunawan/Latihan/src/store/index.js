import { createStore } from "redux";

const initialState = {
    counter : 0
}

const counter = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "INCREMENT":
            let substractor = action.payload ? action.payload : 1

            return {
                counter: state.counter + substractor
            }

        case "DECREMENT":
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

const store = createStore(counter)

export default store