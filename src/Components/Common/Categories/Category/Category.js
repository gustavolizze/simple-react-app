import React from 'reactn';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Category.styles';

const Category = ({ onClick, category, redirect }) => (
    <Button
        to={redirect}
        onClick={onClick}
        variant="contained"
        component={Link}
        color="primary"
        style={styles}
    >
        {category}
    </Button>
);

Category.propTypes = {
    className: PropTypes.string,
    category: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

Category.defaultProps = {
    className: '',
    category: null,
    redirect: null,
    onClick: null
};

export default Category;
