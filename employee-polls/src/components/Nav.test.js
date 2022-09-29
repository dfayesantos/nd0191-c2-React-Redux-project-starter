import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Nav from "./Nav";
import {setAuthedUser} from "../actions/authedUser";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";

const store = createStore(reducer, middleware);

describe("Nav", () => {
    it("should render the Nav view", () => {
        const view = render(
            <Provider store={store}>
            <BrowserRouter>
            <Nav/>
            </BrowserRouter>
            </Provider>
        );
        expect(view).toMatchSnapshot();
    });
});