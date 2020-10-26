import axios from "axios";
import { setAlert } from "./alert";

import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./types";

export const login = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(
      "http://localhost:8080/api/login",
      body,
      config
    );
    console.log(res);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      dispatch(setAlert(error.response.data.message, "danger"));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
