const styles = theme => ({
    root: {
        overflow: 'hidden',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        top: 0,
        width: '100%',
        height: 'calc(100% - 64px)',
        zIndex: 99999,
        textAlign: 'center',
        flexDirection: 'column',
        background: theme.palette.background.default
    }
});

export default styles;
