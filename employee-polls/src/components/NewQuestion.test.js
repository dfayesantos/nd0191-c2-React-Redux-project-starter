import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import { createStore } from "redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import NewQuestion from "./NewQuestion";
import  reducer  from "../reducers";
import  middleware  from "../middleware";
const store = createStore(reducer, middleware);

describe("NewQuestion", () => {
    it("will display correct text in .", () => {
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewQuestion/>
                </BrowserRouter>
            </Provider>
        );

        var optionOne = view.getByTestId('optionOne');
        var optionTwo = view.getByTestId('optionTwo');
        var button = view.getByTestId('submitButton')
        fireEvent.change(optionOne, { target: { value: 'mtsamis' } });
        fireEvent.change(optionTwo, { target: { value: 'xyz123' } });
        expect(optionOne.value).toBe("mtsamis");
        expect(optionTwo.value).toBe("xyz123");
        expect(button.textContent).toBe("Submit");
    });
});