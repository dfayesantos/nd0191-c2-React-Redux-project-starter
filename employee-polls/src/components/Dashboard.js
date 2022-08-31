import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  const isDone = (questionId) => {
    const userVotedOptionOne = props.questions[questionId].optionOne.votes.includes(props.authedUser.id)
    const userVotedOptionTwo = props.questions[questionId].optionTwo.votes.includes(props.authedUser.id)
    const userVoted = userVotedOptionOne || userVotedOptionTwo
    if (userVoted) {
      return true;
    }
      return false;
  }
  return (
    <div className="dashboard-row">
      <h1 className="center">Welcome, {props.authedUser.id}</h1>
        <div className="column">
        <h3 className="center">Unanswered</h3>
      <ul className="dashboard-list">
        {props.questionIds.filter((id)=> !isDone(id)).map((id) => (
          <li key={id}>
            <Question id={id} avatar={props.users[props.questions?.[id]?.author].avatarURL}/>
          </li>
        ))}
      </ul>
      </div>
      <div className="column">
        <h3 className="center">Answered</h3>
      <ul className="dashboard-list">
        {props.questionIds.filter((id)=> isDone(id)).map((id) => (
          <li key={id}>
            <Question id={id} avatar={props.users[props.questions?.[id]?.author].avatarURL} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) =>
{
  
    return {
        authedUser,
        questionIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
        ),
        questions: questions,
        users
    };
  };

export default connect(mapStateToProps)(Dashboard);