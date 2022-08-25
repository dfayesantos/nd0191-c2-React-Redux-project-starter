import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Login= (props) => {
    const navigate = useNavigate();
  const [enteredPassword, setEnteredPassword] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setEnteredPassword(value);
};


  return (
    <div>
        <form>
    <div className="container">
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <h1>Welcome to Employee Polls! Login to get started.</h1>
        <span>Username</span>
        <Select options={props.loggedUsers} />
        {/* {props.users.map(user => {
            return (
              <div className="dropdown-content">
                <h3>{user.id}</h3>
              </div>
            )
        })} */}
        </div>
        <div className="col-md-4"></div>
        </div>
      </div>

      <textarea
          placeholder="Password"
          value={enteredPassword}
           onChange={handlePasswordChange}
          className="textarea"
        />
      </form>
      </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
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

export default connect(mapStateToProps)(Login);