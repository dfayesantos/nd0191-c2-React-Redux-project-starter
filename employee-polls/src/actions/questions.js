import { saveTweet, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addUserQuestion } from "./users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => {dispatch(addQuestion(question));
                          dispatch(addUserQuestion({authedUser, question}))
        })
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// function toggleTweet({ id, authedUser, hasLiked }) {
//   return {
//     type: TOGGLE_TWEET,
//     id,
//     authedUser,
//     hasLiked,
//   };
// }

// export function handleToggleTweet(info) {
//   return (dispatch) => {
//     dispatch(toggleTweet(info));

//     return saveLikeToggle(info).catch((e) => {
//       console.warn("Error in handleToggleTweet: ", e);
//       dispatch(toggleTweet(info));
//       alert("The was an error liking the tweet. Try again.");
//     });
//   };
// }