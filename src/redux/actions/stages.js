import axios from "axios";

import { STAGES_SUCCESS, STAGES_FAIL } from "./types";

export const getStages = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://my.api.mockaroo.com/stages?key=eb877620"
    );
    console.log(res.data);
    dispatch({
      type: STAGES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: STAGES_FAIL,
    });
  }
};
