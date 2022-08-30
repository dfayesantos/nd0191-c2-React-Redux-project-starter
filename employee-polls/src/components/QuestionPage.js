import { connect } from "react-redux";
import Question from "./Question";
import { handleAddAnswer } from "../actions/questions";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};


const QuestionPage = (props) => {
  const userVotedOptionOne = props.question.optionOne.votes.includes(props.authedUser.id)
  const userVotedOptionTwo = props.question.optionTwo.votes.includes(props.authedUser.id)
  const userVoted = userVotedOptionOne || userVotedOptionTwo

 const calculatePercentage = (option) => {
  const totalVotes = props.question.optionOne.votes.length + props.question.optionTwo.votes.length
  if (option === "optionOne") {
    return props.question.optionOne.votes.length / totalVotes * 100;
  } else {
    return props.question.optionTwo.votes.length / totalVotes * 100;
  }
 }
 

  const submitOptionOne = (e) => {
    e.preventDefault();
    props.handleSubmitAnswerOne(props.question.id)
  };

  const submitOptionTwo = (e) => {
    e.preventDefault();
    props.handleSubmitAnswerTwo(props.question.id)
  };
  
  
  return (
    <div className="center">
      <Question id={props.id} avatar={props.users[props.question.author].avatarURL}/>
      {/* <NewTweet id={props.id} /> */}
      <h2 className="center">Would You Rather</h2>
      <div className="button-column">
      <button className={userVotedOptionOne ? 'button-voted' : 'button'} onClick={submitOptionOne} disabled={userVoted ? true : false}>{props.question.optionOne.text}</button>
      {userVoted ? <><span>Percentage: {calculatePercentage("optionOne")}%</span> <br/>
                     <span>Number of Votes: {props.question.optionOne.votes.length}</span>
      </> : <span></span>}
      {/* <ul>
        {props.question.optionOne.votes.length !== 0 && props.question.optionOne.votes.map((user) => (
          <li key={user}>
            {user}
          </li>
        ))}
      </ul> */}
      </div>
      <div className="button-column">
      <button className={userVotedOptionTwo ? 'button-voted' : 'button'} onClick={submitOptionTwo} disabled={userVoted ? true : false}>{props.question.optionTwo.text}</button>
      {userVoted ? <><span>Percentage: {calculatePercentage("optionTwo")}%</span> <br/>
                     <span>Number of Votes: {props.question.optionTwo.votes.length}</span>
      </> : <span></span>}
      {/* <ul>
        {props.question.optionTwo.votes.length !== 0 && props.question.optionTwo.votes.map((user) => (
          <li key={user}>
            {user}
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;

  return {
    authedUser,
    id,
    question: questions[id],
    users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitAnswerOne: (questionId) => {
      dispatch(handleAddAnswer(questionId, "optionOne"));
    },
    handleSubmitAnswerTwo: (questionId) => {
      dispatch(handleAddAnswer(questionId, "optionTwo"));
  }
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionPage));