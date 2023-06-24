const initialState = {
  data: "",
};

const listUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ALL_USER":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default listUserReducer;
