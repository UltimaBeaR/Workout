import update from 'immutability-helper';

import * as actionTypes from './test_actionTypes';

const initialState = {
    values: ['initial value']
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DO_STUFF:
            return update(state, { values: { $push: action.items } });

        default:
            return state;
    }
};

export default testReducer;