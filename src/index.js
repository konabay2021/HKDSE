import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import reducers from "./reducers";
import Result from './containers/Result';
import Home from './components/Home';
import InputPage from './containers/InputPage';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { AnimatedSwitch } from 'react-router-transition';

import './style/style.css'
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
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper44 index-container"
                >


                    {/* <Route path="/HKDSE/result" component={Result} />
                <Route path="/HKDSE" component={Home} /> */}
                    <Route path="/result" component={Result} />
                    <Route path="/input" component={InputPage} />
                    <Route path="/" component={Home} />
                    
                </AnimatedSwitch>
                <Footer />

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