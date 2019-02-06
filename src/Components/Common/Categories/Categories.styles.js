const styles = theme => ({
    root: {
        height: '100%',
        width: '100%',
        position: 'relative',
        borderRadius: 0,
        overflow: 'auto',
        padding: theme.spacing.unit * 3,
        background: theme.palette.primary.dark,
        color: theme.palette.common.white
    },
    title: {
        display: 'inline-flex'
    },
    category: {
        height: '100px'
    }
});

export default styles;
