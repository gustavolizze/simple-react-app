import React from 'reactn';
import { Paper, Grid, Dialog, Slide, Typography, IconButton, withStyles } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { Category } from './Category';
import PropTypes from 'prop-types';
import styles from './Categories.styles';
import categories from './Seed';

const Transition = props => <Slide direction="up" {...props} />;

const Categories = ({ classes, onClose, show }) => (
    <Dialog fullScreen open={show} onClose={onClose} TransitionComponent={Transition}>
        <Paper className={classes.root} elevation={0}>
            <Grid container spacing={16} alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justify="space-between">
                        <Typography
                            variant="h5"
                            component="span"
                            color="inherit"
                            className={classes.title}
                        >
                            View a category
                        </Typography>
                        <IconButton color="inherit" aria-label="Close" onClick={onClose}>
                            <CloseRounded />
                        </IconButton>
                    </Grid>
                </Grid>
                {categories.map((category, index) => (
                    <Grid
                        key={index}
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={12}
                        className={classes.category}
                    >
                        <Category onClick={onClose} color="primary" {...category} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    </Dialog>
);

Categories.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

Categories.defaultProps = {
    classes: null,
    onClose: null,
    show: null
};

export default withStyles(styles)(Categories);
