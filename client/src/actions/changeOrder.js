import { CHANGE_ORDER } from "./index";

export function changeOrder(order) {
  return function (dispatch) {
    return dispatch({ type: CHANGE_ORDER, payload: order });
  };
}
