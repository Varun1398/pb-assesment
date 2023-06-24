import axios from "axios";

export const listUser = () => {
  const instance = axios.create({
    baseURL: "https://reqres.in/api/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "",
    },
  });

  return (dispatch) => {
    instance
      .get("users/")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: "LIST_ALL_USER", payload: response.data });
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};
