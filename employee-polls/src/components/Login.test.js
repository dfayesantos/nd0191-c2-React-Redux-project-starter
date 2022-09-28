import {render} from "@testing-library/react";
import Login from './Login'
import {Provider} from "react-redux";
import React from "react";
import {store} from "../store";

describe("Login", () => {
    it("will matcfh snapshot", () => {
        var view = render(<Provider store={store}><Login/></Provider>);
        expect(view).toMatchSnapshot();
    });
});