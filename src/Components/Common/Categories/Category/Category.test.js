import React, { Fragment } from 'reactn';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import Category from './Category';
import { Button } from '@material-ui/core';

describe('Category Component', () => {
    let props = {},
        wrapper = null;

    beforeEach(() => {
        props = {
            className: 'test',
            category: 'Football',
            redirect: '/football'
        };
        wrapper = mount(
            <MemoryRouter>
                <Fragment>
                    <Route exact path="/" />
                    <Route path="/football" />
                    <Category {...props} />
                </Fragment>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('renders without crashing', () => {
        expect(wrapper.find(Category)).toHaveLength(1);
    });

    it('Must complete the properties', () => {
        const component = wrapper.find(Category);

        Object.keys(props).forEach(key => {
            expect(component.prop(key)).toEqual(props[key]);
        });
    });
});
