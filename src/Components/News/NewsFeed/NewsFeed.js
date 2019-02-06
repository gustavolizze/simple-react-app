import React from 'react';
import { Paper, withStyles } from '@material-ui/core';
import { InfiniteScroll } from './../../Common';
import { FeedBody } from './FeedBody';
import { FeedHeader } from './FeedHeader';
import PropTypes from 'prop-types';
import styles from './NewsFeed.styles';

const NewsFeed = ({ classes, height, hasMoreData, loadNews, news }) => (
    <InfiniteScroll
        height={height}
        loadMore={loadNews}
        hasMore={hasMoreData}
        emptyMessage="No more news to show."
    >
        <Paper className={classes.paper} elevation={0}>
            <FeedHeader />
            <FeedBody {...{ news }} />
        </Paper>
    </InfiniteScroll>
);

NewsFeed.propTypes = {
    classes: PropTypes.object.isRequired,
    height: PropTypes.string.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    loadNews: PropTypes.func.isRequired,
    news: PropTypes.array
};

NewsFeed.defaultProps = {
    classes: null,
    height: null,
    hasMoreData: null,
    loadNews: null,
    news: []
};

export default withStyles(styles)(NewsFeed);
