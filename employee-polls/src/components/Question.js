import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

const Question = (props) => {


  if (props.question === null) {
    return <p>This Tweet doesn't exist</p>;
  }
  const {
    timestamp,
    id,
    author,
  } = props.question;

  return (
    <Link to={`/questions/${id}`} className="question">
      <img src={props.avatar} alt={`Avatar of ${author}`} className="avatar" />
      <div className="question-info">
        <div>
          <span>{author}</span>
          <div>{formatDate(timestamp)}</div>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];


  return {
    authedUser,
    question: question ?? null,
  };
};

export default connect(mapStateToProps)(Question);