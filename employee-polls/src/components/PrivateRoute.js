import {connect} from "react-redux";
import {Navigate, Link} from "react-router-dom";

const PrivateRoute = ({children, isAuthenticated}) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];
    // <Navigate to={`/login?redirectTo=${redirectUrl}`}/>
    return isAuthenticated ? children : <Navigate to='/404error'/>;
};

const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);