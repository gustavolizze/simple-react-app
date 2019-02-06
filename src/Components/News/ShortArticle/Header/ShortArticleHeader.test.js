import React from 'react';
import { mount } from 'enzyme';
import ShortArticleHeader from './ShortArticleHeader';

describe('ShortArticleHeader Component', () => {
    const props = {
        webPublicationDate: '',
        thumbnail: '',
        webTitle: ''
    };

    it('renders without crashing', () => {
        mount(<ShortArticleHeader {...props} />);
    });
});
