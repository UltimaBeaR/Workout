import React, { Component } from 'react';

import Empty from 'components/util/Empty';
import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';
import PageRoutes from 'components/layout/PageRoutes/PageRoutes';

class Layout extends Component {
    render() {
        return (
            <Empty>
                <Header />
                <PageRoutes />
                <Footer />
            </Empty>
        );
    }
}

export default Layout;