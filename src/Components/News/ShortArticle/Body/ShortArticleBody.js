import React, { Fragment } from 'react';
import { CardContent, Typography, CardActions, Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './ShortArticlebody.styles';
import PropTypes from 'prop-types';

const ShortArticleBody = ({ classes, id, trailText, publication }) => {
    const html = {
        dangerouslySetInnerHTML: { __html: `<p>${trailText}</p>` }
    };
    return (
        <Fragment>
            <CardContent>
                <Typography component="div" {...html} />
                <Typography variant="caption">{`Published by: ${publication}`}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    component={Link}
                    size="small"
                    to={{
                        pathname: `/article/${encodeURI(id)}`,
                        state: { modal: true }
                    }}
                    color="secondary"
                    className={classes.bold}
                >
                    Learn More
                </Button>
            </CardActions>
        </Fragment>
    );
};

ShortArticleBody.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    trailText: PropTypes.string.isRequired,
    publication: PropTypes.string
};

ShortArticleBody.defaultProps = {
    classes: null,
    id: null,
    trailText: null,
    publication: ''
};

export default withStyles(styles)(ShortArticleBody);
