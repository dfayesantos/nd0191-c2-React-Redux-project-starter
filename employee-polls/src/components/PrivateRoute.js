import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
let firstAccess = false;
const PrivateRoute = ({children, isAuthenticated}) => {
    if (isAuthenticated) {
        return children
    } else {
        const url = window.location.href.toString()
        if (url.charAt(url.length-1) === '/' && firstAccess === false) {
            firstAccess = true
            return <Navigate to='/login'/>
        } else {
            return <Navigate to='/404error'/>
        }
    }
};

const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);