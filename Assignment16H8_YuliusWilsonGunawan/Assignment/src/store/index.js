import { createStore } from "redux";

const initialState = {
  backlog: [],
  progress: [],
  evaluation: [],
  done: [],
};

const data_store = (state = initialState, action) => {
  switch (action.type) {
    case "BACKLOG":
      return {
        ...state,
        backlog: [...state.backlog, action.payload],
      };

    case "PROGRESS":
      console.log(action);
      return {
        ...state,
        backlog: action.payload[1],
        progress: [...state.progress, action.payload[0]]
      };
    case "EVALUATION":
      return {
        ...state,
        progress: action.payload[1],
        evaluation: [...state.evaluation, action.payload[0]]
      };
    case "DONE":
      return {
        ...state,
        evaluation: action.payload[1],
        done: [...state.done, action.payload[0]]
      };
    default:
      return state;
  }
};

const store = createStore(data_store);

export default store;