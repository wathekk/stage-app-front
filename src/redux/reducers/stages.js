import { STAGES_SUCCESS, STAGES_FAIL } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case STAGES_SUCCESS:
      return payload;
    case STAGES_FAIL:
      return state;
    default:
      return state;
  }
}
