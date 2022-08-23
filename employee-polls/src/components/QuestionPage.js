import { connect } from "react-redux";
import Tweet from "./Tweet";
import Question from "./Question";
import NewTweet from "./NewTweet";
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
  return (
    <div>
      <Question id={props.id} />
      {/* <NewTweet id={props.id} /> */}
      <h2 className="center">Would You Rather</h2>
      {console.log(props)}
      <h3 className="center">{props.question.optionOne.text}</h3>
      <ul>
        {props.question.optionOne.votes.length !== 0 && props.question.optionOne.votes.map((user) => (
          <li key={user}>
            {user}
          </li>
        ))}
      </ul>
      <h3 className="center">{props.question.optionTwo.text}</h3>
      <ul>
        {props.question.optionTwo.votes.length !== 0 && props.question.optionTwo.votes.map((user) => (
          <li key={user}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;

  return {
    id,
    question: questions[id]
  };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));