import React from 'react';
import { Route } from 'react-router-dom';

import Empty from 'components/util/Empty';
import MainPage from 'components/pages/MainPage/MainPage';

const pageRoutes = () => {
    return (
        <Empty>
            <Route path="/" component={MainPage} />
        </Empty>
    );
};

export default pageRoutes;