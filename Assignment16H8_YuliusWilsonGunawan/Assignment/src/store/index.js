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
      return {
        ...state,
        backlog: [...state.backlog],
        progress: [...state.progress, action.payload],
      };
    case "EVALUATION":
      return {
        ...state,
        progress: [...state.progress],
        evaluation: [...state.evaluation, action.payload],
      };
    case "DONE":
      return {
        ...state,
        evaluation: [...state.evaluation],
        done: [...state.done, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(data_store);

export default store;