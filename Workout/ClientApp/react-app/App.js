import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Layout from 'containers/Layout/Layout';

import rootReducer from 'store/root/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout />
            </Provider>
        );
    }
}

export default App;