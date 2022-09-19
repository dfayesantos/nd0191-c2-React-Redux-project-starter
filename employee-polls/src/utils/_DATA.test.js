const {_saveQuestionAnswer} = require("./_DATA");

describe("_saveQuestionAnswer", () => {
    it("expected to return true", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "mtsamis",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionTwo"
        });
        expect(response).toBeTruthy();
    });

    it("expected to return error and reject", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "zoshikanlu",
            qid: undefined,
            answer: "optionTwo"
        }).catch(e => e);
        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});