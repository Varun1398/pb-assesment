import axios from "axios";

export const listUserPerPage = (pageNumber) => {
  const instance = axios.create({
    baseURL: "https://reqres.in/api/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "",
    },
  });

  return (dispatch) => {
    let requestObj;
    if(pageNumber){
        requestObj = {
            page: pageNumber
        }
    }
    instance
      .get("users/", {params: requestObj})
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: "LIST_USER_PER_PAGE", payload: response.data });
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};
