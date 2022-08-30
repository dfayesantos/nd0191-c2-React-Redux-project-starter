import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions))
      //dispatch(setAuthedUser(null));
      dispatch(hideLoading());
    });
  };
}