import React, { Component, setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import { NewsFeed } from './../../News';

class News extends Component {
    componentDidUpdate() {
        if (this.props.match.params.category !== this.global.currentCategory) {
            setGlobal({
                waitingExternalService: true,
                currentCategory: this.props.match.params.category
            });
            this.global.fetchNews();
            ReactDOM.findDOMNode(this).scrollTo(0, 0);
        }
    }

    componentDidMount() {
        setGlobal({
            waitingExternalService: true,
            currentCategory: this.props.match.params.category
        });
        this.global.fetchNews();
    }

    render() {
        return (
            <NewsFeed
                height="calc(100% - 64px)"
                hasMoreData={this.global.hasMoreNews}
                loadNews={this.global.concatNews}
                news={this.global.news}
            />
        );
    }
}

export default News;
