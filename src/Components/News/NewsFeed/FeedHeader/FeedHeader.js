import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './FeedHeader.styles';

const FeedHeader = ({ classes }) => (
    <Typography className={classes.bold} variant="h5" component="h1" gutterBottom>
        The Guardian - News
    </Typography>
);

FeedHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

FeedHeader.defaultProps = {
    classes: null
};

export default withStyles(styles)(FeedHeader);
