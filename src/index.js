import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import Result from './containers/Result';
import Home from './containers/Home';

import './style/style.css'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <>
                {/* <div>Header</div>
                by Ray */}
                <Switch>
                    <Route path="/result" component={Result} />
                    <Route path="/" component={Home} />
                </Switch>
            </>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

