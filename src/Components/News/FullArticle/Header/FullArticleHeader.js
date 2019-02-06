import React from 'react';
import {
    AppBar as Bar,
    Toolbar,
    Fade,
    IconButton,
    withStyles,
    Typography
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import PropTypes from 'prop-types';
import styles from './FullArticleHeader.styles';

const FullArticleHeader = ({ classes, title, onClose }) => (
    <Bar className={classes.root}>
        <Toolbar>
            <div />
            <Fade in={true} timeout={1500}>
                <Typography variant="h6" color="inherit" className={classes.flex}>
                    {title}
                </Typography>
            </Fade>
            <IconButton color="inherit" onClick={onClose} aria-label="Close">
                <CloseRounded />
            </IconButton>
        </Toolbar>
    </Bar>
);

FullArticleHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

FullArticleHeader.defaultProps = {
    classes: null,
    title: null,
    onClose: null
};

export default withStyles(styles)(FullArticleHeader);
