import { render } from "@testing-library/react";
import {Provider} from "react-redux";
import { createStore } from "redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Question from "./Question";
import  reducer  from "../reducers";
import  middleware  from "../middleware";
import {receiveQuestions} from "../actions/questions";
const store = createStore(reducer, middleware);

describe("Question", () => {
    it("should display message that question does not exist for undefined question id", () => {
        let mockQuestion = {
            "invalidIdNumber": {
              id: 'invalidIdNumber',
              author: 'sarahedo',
              timestamp: 1467166872634,
              optionOne: {
                votes: ['sarahedo'],
                text: 'Build our new application with Javascript',
              },
              optionTwo: {
                votes: [],
                text: 'Build our new application with Typescript'
              }
            }}
        store.dispatch(receiveQuestions(mockQuestion));
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Question/>
                </BrowserRouter>
            </Provider>
        );
        expect(view).toMatchSnapshot();
        

    });
});