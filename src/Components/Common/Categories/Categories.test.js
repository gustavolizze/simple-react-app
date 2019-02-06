import React from 'reactn';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Categories from './Categories';

describe('Categories Component', () => {
    let props = {},
        wrapper;

    beforeEach(() => {
        props = {
            show: true,
            onClose: jest.fn()
        };
        wrapper = mount(
            <MemoryRouter>
                <Categories {...props} />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('renders without crashing', () => {
        expect(wrapper.find(Categories)).toHaveLength(1);
    });

    it('Must complete the properties', () => {
        const component = wrapper.find(Categories);

        Object.keys(props).forEach(key => {
            expect(component.prop(key)).toEqual(props[key]);
        });
    });

    it('Must fire the close event', () => {
        wrapper.find('button[aria-label="Close"]').simulate('click');
        expect(props.onClose).toHaveBeenCalledTimes(1);
    });
});
