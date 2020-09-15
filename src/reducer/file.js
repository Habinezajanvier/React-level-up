const initialState = {
  file: null,
  error: null,
  progress: 0,
  docs: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FILE":
      return {
        ...state,
        file: action.payload,
        progress: 0,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.payload,
      };
    case "SET_DOCS":
      return {
        ...state,
        docs: action.payload,
      };
    default:
      return state;
  }
};
