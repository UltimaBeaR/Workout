import React, { Component } from 'react';
import { connect } from 'react-redux';

import Test from 'components/Test/Test';

import applyDispatch from 'util/applyDispatch';
import * as testActions from 'store/test/test_actions';

class MainPage extends Component {
    componentDidMount() {
        this.props.actions.doStuffFromServer();
    }

    testButtonClickHandler = () => {
        this.props.actions.doStuff([1, 2, 3]);
    }

    render() {
        return <Test list={this.props.list} onButtonClick={this.testButtonClickHandler} />;
    }
}

export default connect(
    state => ({
        list: state.test.values
    }),
    dispatch => ({ actions: applyDispatch(dispatch, testActions) })
)(
    MainPage
);