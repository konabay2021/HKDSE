import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from "./reducers";
import { AnimatedSwitch } from 'react-router-transition';

import Result from './containers/Result';
import Home from './components/Home';
import InputPage from './containers/InputPage';
import NavBar from "./components/NavBar";
import Tutorial from "./containers/Tutorial"
import Resources from "./components/Resources"

import './style/style.scss'
import * as serviceWorker from "./serviceWorker"

const Workaround = ({ action, children }) =>
    action === 'REPLACE' ? null : children
    console.log(process.env.PUBLIC_URL)
ReactDOM.render(
    <Provider store={createStore(reducers)}>

        <BrowserRouter >
            <React.Fragment>
                <NavBar />
                 <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 1 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper44 index-container" 
                >
                    <Route path={`${process.env.PUBLIC_URL}/result`} component={Result} />
                    <Route path={`${process.env.PUBLIC_URL}/input`} component={InputPage} />
                    <Route path={`${process.env.PUBLIC_URL}/tutorial/:topicId/:topicId`}  component={Tutorial} />
                    <Route path={`${process.env.PUBLIC_URL}/tutorial/:topicId`}  component={Tutorial} />
                    <Route path={`${process.env.PUBLIC_URL}/tutorial`} exact component={Tutorial} />
                    <Route path={`${process.env.PUBLIC_URL}/resources/:topicId`}  component={Resources} />
                    <Route path={`${process.env.PUBLIC_URL}/resources`} exact component={Resources} />
                    <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
                    
                </AnimatedSwitch>

            </React.Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()