import React, { Fragment } from 'react';
import { CardMedia, CardHeader, withStyles } from '@material-ui/core';
import styles from './ShortArticleHeader.styles';
import PropTypes from 'prop-types';
import moment from 'moment';

const ShortArticleHeader = ({ classes, webPublicationDate, thumbnail, webTitle }) => (
    <Fragment>
        {thumbnail ? (
            <CardMedia
                component="img"
                image={thumbnail}
                alt={`Image For: ${webTitle}`}
                className={classes.media}
            />
        ) : null}
        <CardHeader
            title={webTitle}
            subheader={`Date: ${moment(webPublicationDate).format('DD/MM/YYYY HH:mm')}`}
            titleTypographyProps={{
                className: classes.bold
            }}
        />
    </Fragment>
);

ShortArticleHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    webPublicationDate: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    webTitle: PropTypes.string.isRequired
};

ShortArticleHeader.defaultProps = {
    classes: null,
    webPublicationDate: null,
    thumbnail: null,
    webTitle: null
};

export default withStyles(styles)(ShortArticleHeader);
