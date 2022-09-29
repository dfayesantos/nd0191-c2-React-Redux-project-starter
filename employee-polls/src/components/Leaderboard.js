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
              <span data-testid={'username'}>{user.name}</span>
              <span></span>
              <div>{user.id}</div>
              <div data-testid={'questions-length'}>Questions: {user.questions.length}</div>
              <div data-testid={'answers-length'}>Answered: {Object.keys(user.answers).length}</div>
              </div>
            </div>
              <div className="question-info">
                {/* <div>Total Score:</div>
                <div>{String(user.questions.length + user.answers.length)}</div> */}
              </div>
            </div>
            )
        })}
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