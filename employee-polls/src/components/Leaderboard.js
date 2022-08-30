import { connect } from "react-redux";

const Leaderboard= (props) => {

  if (props.users === null) {
    return <p>No users exist</p>;
  }

  return (
    <div>
        {props.users.map(user => {
            return (
            <div key={user.id} className="question">
            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar" />
            <div className="question-info">
              <div>
              <span>{user.name}</span>
              <span></span>
              <div>{user.id}</div>
              <div>Questions: {user.questions.length}</div>
              <div>Answers: {Object.keys(user.answers).length}</div>
              </div>
            </div>
              <div className="question-info">
                <div>Total Score:</div>
                <div>{String(user.questions.length + user.answers.length)}</div>
              </div>
            </div>
            )
        })}
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
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users: Object.values(users).sort(
        (a, b) => (Object.keys(b.questions).length + Object.keys(b.answers).length) - (Object.keys(a.questions).length + Object.keys(a.answers).length)
      ) ?? null,
  };
};

export default connect(mapStateToProps)(Leaderboard);