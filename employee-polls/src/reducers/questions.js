import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    // case TOGGLE_TWEET:
    //   return {
    //     ...state,
    //     [action.id]: {
    //       ...state[action.id],
    //       likes:
    //         action.hasLiked === true
    //           ? state[action.id].likes.filter(
    //               (uid) => uid !== action.authedUser
    //             )
    //           : state[action.id].likes.concat([action.authedUser]),
    //     },
    //   };
    case ADD_QUESTION:
      const { question } = action;

    //   let replyingTo = {};
    //   if (tweet.replyingTo !== null) {
    //     replyingTo = {
    //       [tweet.replyingTo]: {
    //         ...state[tweet.replyingTo],
    //         replies: state[tweet.replyingTo].replies.concat([tweet.id]),
    //       },
    //     };
    //   }

      return {
        ...state,
        [action.question.id]: action.question,
        // ...replyingTo,
      };

      case ADD_ANSWER_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat(action.author)
          }
        }


      };
    default:
      return state;
  }
}