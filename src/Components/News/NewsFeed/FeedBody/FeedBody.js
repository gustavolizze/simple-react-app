import React from 'react';
import { List, Grid, withStyles } from '@material-ui/core';
import { FeedItem } from './FeedItem';
import PropTypes from 'prop-types';
import styles from './FeedBody.styles';

const FeedBody = ({ classes, news }) => (
    <List className={classes.list}>
        <Grid container spacing={0} alignItems="center" justify="center">
            {(news || []).map(article => (
                <Grid item key={article.id} xl={2} lg={3} md={4} sm={6} xs={12}>
                    <FeedItem article={article} />
                </Grid>
            ))}
        </Grid>
    </List>
);

FeedBody.propTypes = {
    classes: PropTypes.object.isRequired,
    news: PropTypes.array
};

FeedBody.defaultProps = {
    classes: null,
    news: []
};

export default withStyles(styles)(FeedBody);
