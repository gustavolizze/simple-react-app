import React from 'react';
import { mount } from 'enzyme';
import InfiniteScroll from './InfiniteScroll';

describe('InfiniteScroll Component', () => {
    let props = {};

    beforeEach(() => {
        props = {
            hasMore: true,
            emptyMessage: 'Tests',
            loadMore: jest.fn(),
            height: '100px',
            width: '100px'
        };
    });

    it('renders without crashing', () => {
        mount(<InfiniteScroll {...props} />);
    });

    it('Must complete the properties', () => {
        const component = mount(<InfiniteScroll {...props} />);

        Object.keys(props).forEach(key => {
            expect(component.prop(key)).toEqual(props[key]);
        });
    });
});
