import { connect } from "react-redux";
import Tweet from "./Tweet";
import Question from "./Question";
import { isExpired} from "../utils/helpers";

const Dashboard = (props) => {
  return (
    <div className="row">
        <div className="column">
        <h3 className="center">New Questions</h3>
      <ul className="dashboard-list">
        {props.questionIds.filter((id)=> !isExpired(props.questions[id].timestamp)).map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
      </div>
      <div className="column">
        <h3 className="center">Done</h3>
      <ul className="dashboard-list">
        {props.questionIds.filter((id)=> isExpired(props.questions[id].timestamp)).map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
      </div>
      {/* <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.tweetIds.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

const mapStateToProps = ({ questions }) =>
{
  
    return {
        questionIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
        ),
        questions: questions
    };
  };
// (
    
//     return {
// //   tweetIds: Object.keys(tweets).sort(
// //     (a, b) => tweets[b].timestamp - tweets[a].timestamp
// //   ),



//   questionIds: Object.keys(questions).sort(
//     (a, b) => questions[b].timestamp - questions[a].timestamp
//   )


// });

export default connect(mapStateToProps)(Dashboard);