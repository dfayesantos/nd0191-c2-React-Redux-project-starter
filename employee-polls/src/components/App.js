import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import Leaderboard from "./Leaderboard";
import TweetPage from "./TweetPage";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import Nav from "./Nav";
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
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/tweet/:id" element={<TweetPage />} />
            <Route path="/questions/:id" element={<QuestionPage />} />
            {/* <Route path="/new" element={<NewTweet />} /> */}
            <Route path="/new" element={<NewQuestion />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
