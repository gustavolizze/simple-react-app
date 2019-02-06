import React from 'react';
import Layout from './Default';

const WithDefaultTemplate = Children => {
    class DefaultLayout extends React.Component {
        render() {
            return (
                <Layout>
                    <Children {...this.props} />
                </Layout>
            );
        }
    }

    return DefaultLayout;
};

export default WithDefaultTemplate;
