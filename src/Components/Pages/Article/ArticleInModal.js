import React, { Component } from 'react';
import { Dialog, Slide } from '@material-ui/core';
import Article from './Article';

class ArticleInModal extends Component {
    render() {
        return (
            <div>
                <Dialog
                    fullScreen
                    open={true}
                    TransitionComponent={props => <Slide direction="up" {...props} />}
                >
                    <Article />
                </Dialog>
            </div>
        );
    }
}

export default ArticleInModal;
