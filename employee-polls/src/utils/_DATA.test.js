const {_saveQuestionAnswer, _saveQuestion} = require("./_DATA");

describe("_saveQuestion", () => {
    it("expected to return true", async () => {
        const optionOneText = "walk to school"
        const optionTwoText = "bike to school"
        const author = 'zoshikanlu'
        
        const res = await _saveQuestion({
            optionOneText: optionOneText,
            optionTwoText: optionTwoText,
            author: author,
        });
        const question = {
            "id": res.id,
            "timestamp": res.timestamp,
            "author": author,
            "optionOne": {
              votes: [],
              text: optionOneText,
            },
            "optionTwo": {
              votes: [],
              text: optionTwoText,
            },
        }
        expect(res).toEqual(question)
    });

    it("expected to return error and reject", async () => {
        const res = await _saveQuestion({
            optionOneText: undefined,
            optionTwoText: 'bike to school',
            author: 'zoshikanlu',
        }).catch(e => e);
        expect(res).toBe("Please provide optionOneText, optionTwoText, and author");
    });
});

describe("_saveQuestionAnswer", () => {
    it("expected to return true", async () => {
        const res = await _saveQuestionAnswer({
            authedUser: "mtsamis",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionTwo"
        });
        expect(res).toBeTruthy();
    });

    it("expected to return error and reject", async () => {
        const res = await _saveQuestionAnswer({
            authedUser: "zoshikanlu",
            qid: undefined,
            answer: "optionTwo"
        }).catch(e => e);
        expect(res).toBe("Please provide authedUser, qid, and answer");
    });
});