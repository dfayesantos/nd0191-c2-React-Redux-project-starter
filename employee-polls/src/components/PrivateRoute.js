import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children, isAuthenticated}) => {
    return isAuthenticated ? children : <Navigate to='/404error'/>;
};

const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);