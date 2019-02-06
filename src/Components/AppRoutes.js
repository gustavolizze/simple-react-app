import React, { Component, Fragment } from 'reactn';
import { Switch, Route } from 'react-router-dom';
import { withDefaultTemplate } from './Templates';
import { Article, ArticleInModal } from './Pages/Article';
import News from './Pages/News';

class AppRoutes extends Component {
    previousLocation = this.props.location;

    componentDidUpdate(prevProps) {
        let { location } = this.props;

        if (this.props.history.action !== 'POP' && (!location.state || !location.state.modal))
            this.previousLocation = prevProps.location;
    }

    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );

        return (
            <Fragment>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/:category?" component={News} />
                    <Route
                        path="/article/:v1?/:v2?/:v3?/:v4?/:v5?/:v6?/:v7?/:v8?/:v9?/:v10?"
                        component={Article}
                    />
                </Switch>
                {isModal ? (
                    <Route
                        path="/article/:v1?/:v2?/:v3?/:v4?/:v5?/:v6?/:v7?/:v8?/:v9?/:v10?"
                        component={ArticleInModal}
                    />
                ) : null}
            </Fragment>
        );
    }
}

export default withDefaultTemplate(AppRoutes);
