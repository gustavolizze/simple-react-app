import React from 'react';
import styles from './FullArticleBody.styles';
import {
    Fade,
    Paper,
    List,
    ListSubheader,
    ListItem,
    Typography,
    withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';

const FullArticleBody = ({
    classes,
    webTitle,
    thumbnail,
    sectionName,
    publication,
    webPublicationDate,
    body
}) => {
    const html = {
        dangerouslySetInnerHTML: { __html: `<p>${body}</p>` }
    };

    return (
        <Fade in={true} timeout={1500}>
            <Paper className={classes.paper} elevation={0}>
                <img src={thumbnail} alt={webTitle} className={classes.img} />
                <List className={classes.list}>
                    <ListSubheader className={classes.listItemHeader}>
                        {`${sectionName} - Published by ${publication} ${moment(
                            webPublicationDate
                        ).fromNow()}`}
                    </ListSubheader>
                    <ListItem className={classes.listItem}>
                        <Typography component="div" {...html} className={classes.body} />
                    </ListItem>
                </List>
            </Paper>
        </Fade>
    );
};

FullArticleBody.propTypes = {
    classes: PropTypes.object.isRequired,
    webTitle: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    sectionName: PropTypes.string,
    publication: PropTypes.string,
    webPublicationDate: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

FullArticleBody.defaultProps = {
    classes: null,
    webTitle: null,
    thumbnail: null,
    sectionName: null,
    publication: null,
    webPublicationDate: null,
    body: null
};

export default withStyles(styles)(FullArticleBody);
