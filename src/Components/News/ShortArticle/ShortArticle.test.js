import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ShortArticle from './ShortArticle';

describe('ShortArticle Component', () => {
    const props = {
        webPublicationDate: '',
        thumbnail: '',
        webTitle: '',
        id: '',
        trailText: '',
        publication: ''
    };

    it('renders without crashing', () => {
        mount(
            <MemoryRouter>
                <ShortArticle {...props} />
            </MemoryRouter>
        );
    });
});
