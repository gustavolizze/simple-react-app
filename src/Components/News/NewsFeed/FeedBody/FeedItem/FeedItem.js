import React, { Fragment } from 'react';
import { ListSubheader, ListItem, withStyles } from '@material-ui/core';
import { ShortArticle } from './../../../ShortArticle';
import PropTypes from 'prop-types';
import styles from './FeedItem.styles';

const FeedItem = ({ classes, article }) => (
    <Fragment>
        <ListSubheader className={classes.listItemHeader}>{article.sectionName}</ListSubheader>
        <ListItem className={classes.listItem}>
            <ShortArticle {...article} {...article.fields} />
        </ListItem>
    </Fragment>
);

FeedItem.propTypes = {
    classes: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired
};

FeedItem.defaultProps = {
    classes: null,
    article: null
};

export default withStyles(styles)(FeedItem);
