const styles = theme => ({
    paper: {
        paddingBottom: 50,
        overflowY: 'auto',
        height: 'calc(100% - 64px)'
    },
    list: {
        width: '100%',
        marginBottom: theme.spacing.unit * 2
    },
    listItemHeader: {
        backgroundColor: theme.palette.background.paper
    },
    listItem: {
        width: '100%'
    },
    img: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    body: {
        width: '100%',
        textAlign: 'justify',
        '& > *': {
            width: '100%',
            margin: 0
        },
        '& :not(p)': {
            textAlign: 'center',
            margin: '15px 0px'
        },
        '& img': {
            display: 'inline-block',
            objectFit: 'contain',
            margin: '0',
            width: '50%',
            height: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        }
    }
});

export default styles;
