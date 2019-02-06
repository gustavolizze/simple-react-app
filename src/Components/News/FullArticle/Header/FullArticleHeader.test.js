import React from 'react';
import { mount } from 'enzyme';
import FullArticleHeader from './FullArticleHeader';

describe('FullArticleHeader Component', () => {
    const props = {
        title: '',
        onClose: jest.fn()
    };

    it('renders without crashing', () => {
        mount(<FullArticleHeader {...props} />);
    });
});
