import React, { Component, Fragment } from 'reactn';
import ReactDOM from 'react-dom';
import { Typography, withStyles, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import styles from './InfiniteScroll.styles';

class InfiniteScroll extends Component {
    state = {
        inLoading: false
    };

    onScroll = debounce(() => {
        const { hasMore } = this.props;

        if (hasMore === false) return;

        const component = ReactDOM.findDOMNode(this);
        const shouldLoad =
            Math.ceil(component.clientHeight + component.scrollTop) >= component.scrollHeight;

        if (shouldLoad) this.loadMore();
    }, 350);

    loadMore() {
        const { loadMore } = this.props;
        const { inLoading } = this.state;

        if (inLoading) return;

        this.setState({ inLoading: true });
        setTimeout(
            () => Promise.resolve(loadMore()).then(this.setState({ inLoading: false })),
            1500
        );
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener('scroll', this.onScroll, false);
    }

    render() {
        const { classes, children, hasMore, emptyMessage, height, width } = this.props;
        const { inLoading } = this.state;
        const style = { height, width };

        return (
            <div className={classes.root} style={style}>
                <Fragment>
                    {children}
                    {inLoading ? (
                        <CircularProgress size={30} className={classes.bottom} />
                    ) : hasMore === false ? (
                        <Typography variant="caption" className={classes.bottom}>
                            {emptyMessage}
                        </Typography>
                    ) : null}
                </Fragment>
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.element,
    hasMore: PropTypes.bool.isRequired,
    emptyMessage: PropTypes.string.isRequired,
    loadMore: PropTypes.func.isRequired,
    height: PropTypes.string,
    width: PropTypes.string
};

InfiniteScroll.defaultProps = {
    classes: null,
    children: null,
    hasMore: null,
    emptyMessage: null,
    loadMore: null,
    height: '100%',
    width: '100%'
};

export default withStyles(styles)(InfiniteScroll);
