import {render} from "@testing-library/react";
import Error404 from './Error404'
import React from "react";
import { BrowserRouter} from "react-router-dom";
import Nav from './Nav'
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";

const store = createStore(reducer, middleware);

describe("Error404", () => {
    it("will match snapshot", () => {
        var view = render(
            <Provider store={store}>
            <BrowserRouter>
            <Nav/>
            <Error404/>
            </BrowserRouter></Provider>);
        expect(view).toMatchSnapshot();
    });
});