import * as actionTypes from './test_actionTypes';

import axios from 'axiosInstances/api';

// items: array
export const doStuff = (items) => {
    return { type: actionTypes.DO_STUFF, items: items };
};

export const doStuffFromServer = () => {
    return dispatch => {
        axios.get('testvalues')
            .then(response => {
                dispatch(doStuff(response.data));
            });
    };
};