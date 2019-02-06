import React from 'react';
import { mount } from 'enzyme';
import FullArticle from './FullArticle';

describe('FullArticle Component', () => {
    const props = {
        webTitle: '',
        thumbnail: '',
        sectionName: '',
        publication: '',
        webPublicationDate: '',
        onClose: jest.fn(),
        body: ''
    };

    it('renders without crashing', () => {
        mount(<FullArticle {...props} />);
    });
});
