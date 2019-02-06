import React from 'react';
import { mount } from 'enzyme';
import FullArticleBody from './FullArticleBody';

describe('FullArticleBody Component', () => {
    const props = {
        webTitle: '',
        thumbnail: '',
        sectionName: '',
        publication: '',
        webPublicationDate: '',
        body: ''
    };

    it('renders without crashing', () => {
        mount(<FullArticleBody {...props} />);
    });
});
