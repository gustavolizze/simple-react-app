import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ShortArticleBody from './ShortArticleBody';

describe('ShortArticleBody Component', () => {
    const props = {
        id: '',
        trailText: '',
        publication: ''
    };

    it('renders without crashing', () => {
        mount(
            <MemoryRouter>
                <ShortArticleBody {...props} />
            </MemoryRouter>
        );
    });
});
