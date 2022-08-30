import { showLoading, hideLoading } from "react-redux-loading-bar";

export const LOGOUT_USER = "LOGOUT_USER"
export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}

export function handleLoginUser(username, password) {
  return (dispatch, getState) => {
    const {users} = getState();
    const user = Object.values(users)
      .find((user) => user.password === password && user.id === username);
    if (user) {
      return dispatch(setAuthedUser(user));
    }
};
}

export function handleLogoutUser() {
  return {
    type: LOGOUT_USER
  };
}