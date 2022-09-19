import { connect } from "react-redux";
import { Navigate} from "react-router-dom";
import { useState } from "react";
import Select from 'react-select';
import { handleLoginUser } from "../actions/authedUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Login= (props) => {

  const [enteredPassword, setEnteredPassword] = useState("");
  const [username, setUsername] = useState("")

  if (props.authedUser !== null) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
}
    

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setEnteredPassword(value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(username.value, enteredPassword)
    setEnteredPassword("");
  };

  return (
    <div>
     <form onSubmit={handleSubmit}>
    <div className="container">
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <h1>Welcome to Employee Polls! Login to get started.</h1>
            <span>Username</span>
            <Select options={props.loggedUsers} onChange={(choice)=> setUsername(choice)} />
        </div>
        <div className="col-md-4"></div>
        </div>
    </div>
    <div className="col-md-4"></div>

        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <textarea
            placeholder="Password"
            value={enteredPassword}
            onChange={handlePasswordChange}
            className="login-password"
            />
        </div>
        <div className="col-md-4"></div>
        </div>
        <button className="btn" type="submit" disabled={enteredPassword === "" || username === ""}>
          Login
        </button>
    </form>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    authedUser: authedUser,
    loggedUsers : 
        Object.values(users).map(user => {
            var info = {
                "label": user.id,
                "value": user.id,
                "password": user.password
            }
            return info
        })
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      handleSubmit: (username, enteredPassword) => {
        dispatch(handleLoginUser(username, enteredPassword));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);