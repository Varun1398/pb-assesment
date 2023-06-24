const initialState = {
    data: "",
  };
  
  const listUserPerPageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIST_USER_PER_PAGE":
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  export default listUserPerPageReducer;
  