import { Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import { handleLogoutUser } from "../actions/authedUser";

const Nav = ({dispatch, authedUser}) => {
  const navigate = useNavigate()
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(handleLogoutUser());
    navigate('/login')
};
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new">New Question</Link>
        </li>
        {authedUser ? <li>
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        </li> : <></>}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({authedUser}) => ({
  authedUser: authedUser
});

export default connect(mapStateToProps)(Nav);