import { saveTweet, saveQuestion, saveQuestionAnswer} from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addUserQuestion, addUserAnswer} from "./users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION"
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
      author: authedUser?.id
    })
      .then((question) => {dispatch(addQuestion(question));
                          dispatch(addUserQuestion(authedUser?.id, question))
        })
      .then(() => dispatch(hideLoading()));
  };
}

function addAnswerQuestion(author, answer, questionId) {
  return {
      type: ADD_ANSWER_QUESTION,
      author,
      answer,
      questionId,
  };
}


export function handleAddAnswer(question, answer) {
  return (dispatch, getState) => {
      const { authedUser } = getState();
      return saveQuestionAnswer(authedUser.id, answer, question)
          .then(() => {
              dispatch(addAnswerQuestion(authedUser.id, answer, question));
              dispatch(addUserAnswer(authedUser.id, answer, question));
          });
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
