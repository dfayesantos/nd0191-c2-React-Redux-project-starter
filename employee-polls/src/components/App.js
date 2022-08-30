import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import Error404 from "./Error404";
import Nav from "./Nav";
import PrivateRoute from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/questions/:id" element={<PrivateRoute><QuestionPage/></PrivateRoute>} />
            <Route path="/new" element={<PrivateRoute><NewQuestion/></PrivateRoute>}/>
            <Route path="/Leaderboard" element={<PrivateRoute><Leaderboard/></PrivateRoute>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/404error" element={<Error404/>} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  // loading: authedUser === null,
  isAuthenticated: authedUser
});

export default connect(mapStateToProps)(App);
