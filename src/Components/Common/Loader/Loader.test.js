import React from 'react';
import { mount } from 'enzyme';
import Loader from './Loader';

describe('Loader Component', () => {
    let props = {};

    beforeEach(() => {
        props = {
            inLoading: true
        };
    });

    it('renders without crashing', () => {
        mount(<Loader {...props} />);
    });
});
