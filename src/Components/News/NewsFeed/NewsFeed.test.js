import React from 'react';
import { mount } from 'enzyme';
import NewsFeed from './NewsFeed';

describe('NewsFeed Component', () => {
    const props = {
        height: '100%',
        hasMoreData: false,
        loadNews: jest.fn(),
        news: []
    };

    it('renders without crashing', () => {
        mount(<NewsFeed {...props} />);
    });
});
