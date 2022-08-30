import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
//   TiArrowBackOutline,
//   TiHeartOutline,
//   TiHeartFullOutline,
// } from "react-icons/ti";
import { useNavigate, Link } from "react-router-dom";

const Question = (props) => {
  const navigate = useNavigate();

//   const handleLike = (e) => {
//     e.preventDefault();

//     const { dispatch, tweet, authedUser } = props;

//     dispatch(
//       handleToggleTweet({
//         id: tweet.id,
//         hasLiked: tweet.hasLiked,
//         authedUser,
//       })
//     );
//   };

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
        {/* <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div> */}
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