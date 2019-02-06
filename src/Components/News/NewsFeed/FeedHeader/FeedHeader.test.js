import React from 'react';
import { mount } from 'enzyme';
import FeedHeader from './FeedHeader';

describe('FeedHeader Component', () => {
    it('renders without crashing', () => {
        mount(<FeedHeader />);
    });
});
