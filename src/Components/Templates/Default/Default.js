import React, { Fragment, setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import { Categories, Loader, AppBar } from './../../Common';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash.debounce';

class Default extends React.Component {
    state = {
        openCategories: false
    };

    searchEvent = debounce(() => {
        setGlobal({
            waitingExternalService: true
        });

        if (this.props.location.pathname.search('/article') >= 0) this.props.history.push('/');

        this.global.fetchNews();
        ReactDOM.findDOMNode(this).scrollTo(0, 0);
    }, 350);

    searchText = text => {
        setGlobal({
            currentSearch: text
        });
        this.searchEvent();
    };

    render() {
        const { waitingExternalService, currentSearch } = this.global;

        return (
            <Fragment>
                {this.props.children}
                <Loader inLoading={waitingExternalService} />
                <Categories
                    show={this.state.openCategories}
                    onClose={() => this.setState({ openCategories: false })}
                />
                <AppBar
                    onCategoriesClick={() => this.setState({ openCategories: true })}
                    onClose={() => this.searchEvent({ openCategories: false })}
                    search={currentSearch}
                    onSearch={this.searchText.bind(this)}
                />
            </Fragment>
        );
    }
}

export default withRouter(Default);
