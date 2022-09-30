import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children, isAuthenticated}) => {

    const url = window.location.href.toString().split(window.location.host);
    if (!isAuthenticated) {
        return <Navigate to={`/login?redirectTo=${url[1]}`}/>
    } 

    return children
};

const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);