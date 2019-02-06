import React, { Fragment } from 'react';
import { FullArticleBody } from './Body';
import { FullArticleHeader } from './Header';
import moment from 'moment';
import PropTypes from 'prop-types';

const FullArticle = props => {
    const { onClose } = props;
    const { webTitle, thumbnail, sectionName, publication, webPublicationDate, body } = props;
    const title = `${webTitle} - Date: ${moment(webPublicationDate).format('DD/MM/YYYY HH:mm')}`;

    return (
        <Fragment>
            <FullArticleHeader {...{ onClose, title }} />
            <FullArticleBody
                {...{
                    webTitle,
                    thumbnail,
                    sectionName,
                    publication,
                    webPublicationDate,
                    body
                }}
            />
        </Fragment>
    );
};

FullArticle.propTypes = {
    webTitle: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    sectionName: PropTypes.string,
    publication: PropTypes.string,
    webPublicationDate: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    body: PropTypes.string.isRequired
};

FullArticle.defaultProps = {
    onClose: null,
    webTitle: null,
    thumbnail: null,
    sectionName: '',
    publication: '',
    webPublicationDate: null,
    body: null
};

export default FullArticle;
