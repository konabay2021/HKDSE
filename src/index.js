import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import {TransitionGroup, CSSTransition } from 'react-transition-group'
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
const routes = [
    { path: '/result', name: 'Result', Component: Result },
    { path: '/', name: 'Home', Component: Home },

]

const Workaround = ({ action, children }) =>
    action === 'REPLACE' ? null : children
ReactDOM.render(
    <Provider store={createStore(reducers)}>

        <BrowserRouter>
            {/* <div>Header</div>
                by Ray */}
            <React.Fragment>
                <NavBar />
                 <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 1 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper44 index-container" 
                >


                    {/* <Route path="/HKDSE/result" component={Result} />
                <Route path="/HKDSE" component={Home} /> */}
                    <Route path="/result" component={Result} />
                    <Route path="/input" component={InputPage} />
                    <Route path={`/tutorial/:topicId/:topicId`}  component={Tutorial} />
                    <Route path={`/tutorial/:topicId`}  component={Tutorial} />
                    <Route path="/tutorial" exact component={Tutorial} />
                    <Route path={`/resources/:topicId`}  component={Tutorial} />
                    <Route path="/resources" exact component={Resources} />
                    <Route path="/" component={Home} />
                    
                </AnimatedSwitch>

            </React.Fragment>
            {/*                     
                    {routes.map(({ path, Component }) => (
                        <Route key={path} exact  path={path}
                        >
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div className="page">
                                        <Component  />
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))} */}

        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()