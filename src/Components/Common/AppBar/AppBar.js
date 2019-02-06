import React from 'reactn';
import { AppBar as Bar, Toolbar, IconButton, InputBase, withStyles } from '@material-ui/core';
import { AppsRounded, SearchRounded } from '@material-ui/icons';
import PropTypes from 'prop-types';
import styles from './AppBar.styles';

const handleChange = (event, onSearch) => onSearch(event.target.value.trim());

const AppBar = ({ classes, search, onSearch, onCategoriesClick }) => (
    <Bar position="fixed" color="primary" className={classes.root}>
        <Toolbar className={classes.toolbar}>
            <IconButton color="inherit" aria-label="Categories" onClick={onCategoriesClick}>
                <AppsRounded />
            </IconButton>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchRounded />
                </div>
                <InputBase
                    placeholder="Try search for a article..."
                    onChange={event => handleChange(event, onSearch)}
                    value={search}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                />
            </div>
            <div />
        </Toolbar>
    </Bar>
);

AppBar.defaultProps = {
    search: '',
    classes: null,
    onSearch: null,
    onCategoriesClick: null
};

AppBar.propTypes = {
    search: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
    onCategoriesClick: PropTypes.func.isRequired
};

export default withStyles(styles)(AppBar);
