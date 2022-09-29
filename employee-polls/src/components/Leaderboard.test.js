import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import { createStore } from "redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Leaderboard from "./Leaderboard";
import  reducer  from "../reducers";
import  middleware  from "../middleware";
import {receiveUsers} from "../actions/users";
import avatar2 from '../pictures/profile2.png'
const store = createStore(reducer, middleware);

describe("Leaderboard", () => {
    it("should display the correct number of questions and answered questions for the given user", () => {
        let users = {
            sarahedo: {
              id: 'sarahedo',
              password:'password123',
              name: 'Sarah Edo',
              avatarURL: avatar2,
              answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionOne',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
              },
              questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            }}
        store.dispatch(receiveUsers(users));

        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Leaderboard/>
                </BrowserRouter>
            </Provider>
        );

        const username= view.getByTestId("username");
        const numQuestions= view.getByTestId("questions-length");
        const numAnswers = view.getByTestId("answers-length")
        expect(username.textContent).toBe("Sarah Edo");
        expect(numQuestions.textContent).toBe("Questions: " + 2);
        expect(numAnswers.textContent).toBe("Answered: " + 4);

    });
});