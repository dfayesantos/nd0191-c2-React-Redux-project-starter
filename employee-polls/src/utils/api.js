import {
    _getTweets,
    _saveLikeToggle,
    _saveTweet,
  } from './_DATA.js'
  
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA2.js'
  
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getTweets(),
      _getQuestions(),
    ]).then(([users, tweets, questions]) => ({
      users,
      tweets,
      questions
    }))
  }
  
  export function saveLikeToggle (info) {
    return _saveLikeToggle(info)
  }
  
  export function saveTweet (info) {
    return _saveTweet(info)
  }

  export function saveQuestion (info) {
    return _saveQuestion(info)
  }
  
  export function saveQuestionAnswer(authedUser, answer, qid) {
    return _saveQuestionAnswer({
        authedUser,
        qid,
        answer
    });
}