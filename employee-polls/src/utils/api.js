import {
    _getUsers,
    _getTweets,
    _saveLikeToggle,
    _saveTweet,
  } from './_DATA.js'
  
import { _getQuestions } from './_DATA2.js'
  
  
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