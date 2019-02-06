import React, { Fragment } from 'reactn';
import PropTypes from 'prop-types';
import { withStyles, CssBaseline } from '@material-ui/core';
import styles from './ResetCss.styles';

const ResetCss = ({ children }) => (
    <Fragment>
        <CssBaseline />
        {children}
    </Fragment>
);

ResetCss.defaultProps = {
    children: null
};

ResetCss.propTypes = {
    children: PropTypes.any
};

export default withStyles(styles, { name: 'ResetCss' })(ResetCss);
