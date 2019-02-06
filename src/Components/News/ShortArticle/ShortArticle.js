import React from 'react';
import { ShortArticleBody } from './Body';
import { ShortArticleHeader } from './Header';
import { Card, Grow, withStyles } from '@material-ui/core';
import styles from './ShortArticle.styles';
import PropTypes from 'prop-types';

const ShortArticle = ({
    classes,
    webPublicationDate,
    thumbnail,
    webTitle,
    id,
    trailText,
    publication
}) => (
    <Grow in={true} timeout={1500}>
        <Card className={classes.root} elevation={2}>
            <ShortArticleHeader {...{ webPublicationDate, thumbnail, webTitle }} />
            <ShortArticleBody {...{ id, trailText, publication }} />
        </Card>
    </Grow>
);

ShortArticle.propTypes = {
    classes: PropTypes.object.isRequired,
    webPublicationDate: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    webTitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    trailText: PropTypes.string.isRequired,
    publication: PropTypes.string
};

ShortArticle.defaultProps = {
    classes: null,
    webPublicationDate: null,
    thumbnail: null,
    webTitle: null,
    id: null,
    trailText: null,
    publication: ''
};

export default withStyles(styles)(ShortArticle);
