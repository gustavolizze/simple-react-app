import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import FeedItem from './FeedItem';

describe('FeedItem Component', () => {
    const props = {
        article: {}
    };

    it('renders without crashing', () => {
        mount(
            <MemoryRouter>
                <FeedItem {...props} />
            </MemoryRouter>
        );
    });
});
