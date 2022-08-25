import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestion = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleChange = (e) => {
    const text1 = e.target.value;
    setText1(text1);
  };

  const handleChange2 = (e) => {
    const text2 = e.target.value;
    setText2(text2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(text1, text2));

    setText1("");
    setText2("");

    if (!id) {
      navigate("/");
    }
  };

  const tweetLeft = 280 - text1.length;
  const tweetLeft2 = 280 - text2.length;

  return (
    <div>
      <h3 className="center">Create New Question</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="Type Option One"
          value={text1}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <textarea
          placeholder="Type Option Two"
          value={text2}
          onChange={handleChange2}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft2 <= 100 && <div className="tweet-length">{tweetLeft2}</div>}
        <button className="btn" type="submit" disabled={text1 === "" || text2 ==="" }>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);