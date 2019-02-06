import React from 'reactn';
import { Fade, CircularProgress, withStyles, Typography } from '@material-ui/core';
import styles from './Loader.styles';

const Loader = ({ classes, inLoading }) =>
    inLoading ? (
        <Fade in={true} timeout={500}>
            <div className={classes.root}>
                <CircularProgress size={35} />
                <br />
                <Typography variant="caption">Please wait ...</Typography>
            </div>
        </Fade>
    ) : null;

export default withStyles(styles)(Loader);
