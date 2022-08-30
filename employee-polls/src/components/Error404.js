import {Link} from "react-router-dom";

const Error404 = () => {
  return (
    <div className="center">
     <h1>Error 404</h1>
     <h3>Please click the login link below to access the page</h3>
     <Link to="/login">Login Page</Link> 
    </div>
  );
};


export default (Error404);