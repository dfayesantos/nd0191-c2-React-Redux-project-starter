import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import { createStore } from "redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import  reducer  from "../reducers";
import  middleware  from "../middleware";
import {setAuthedUser} from "../actions/authedUser";
const store = createStore(reducer, middleware);

describe("Dashboard", () => {
    it("should render the view with appropriate welcome message for logged in user", () => {
        store.dispatch(setAuthedUser({id: "mtsamis", password: "xyz123"}));
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                <Dashboard/>
                </BrowserRouter>
            </Provider>
        );
        const welcomedUser= view.getByTestId("authed-user");
        expect(welcomedUser.textContent).toBe("Welcome, mtsamis");
    });
});