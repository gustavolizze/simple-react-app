import React from 'react';
import { mount } from 'enzyme';
import FeedBody from './FeedBody';

describe('FeedBody Component', () => {
    it('renders without crashing', () => {
        mount(<FeedBody />);
    });
});
