import React, { Component, setGlobal } from 'reactn';
import { FullArticle } from './../../News';
import { withRouter } from 'react-router-dom';

class Article extends Component {
    back(event) {
        event.stopPropagation();
        const { history } = this.props;

        if (history.action === 'POP' || history.length <= 1) history.push('/');
        else history.goBack();
    }

    buildId(params) {
        return Object.keys(params || {})
            .reduce((result, key) => (params[key] ? result.concat([params[key]]) : result), [])
            .join('/');
    }

    componentDidMount() {
        setGlobal({
            waitingExternalService: true
        });
        this.global.fetchArticle(this.buildId(this.props.match.params));
    }

    render() {
        const article = (
            <FullArticle
                onClose={this.props.onClose ? this.props.onClose : this.back.bind(this)}
                {...this.global.article}
                {...this.global.article.fields}
            />
        );

        return article;
    }
}

export default withRouter(Article);
