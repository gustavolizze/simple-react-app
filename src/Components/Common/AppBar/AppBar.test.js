import React from 'reactn';
import { mount } from 'enzyme';
import AppBar from './AppBar';

describe('AppBar Component', () => {
    let props = {};

    beforeEach(() => {
        props = {
            search: 'Test',
            onSearch: jest.fn(),
            onCategoriesClick: jest.fn()
        };
    });

    it('renders without crashing', () => {
        mount(<AppBar {...props} />);
    });

    it('Must complete the properties', () => {
        const component = mount(<AppBar {...props} />);

        Object.keys(props).forEach(key => {
            expect(component.prop(key)).toEqual(props[key]);
        });
    });

    it('Must fire the search event', () => {
        const component = mount(<AppBar {...props} />);
        const input = component.find('input');

        input.simulate('change', { event: { target: { value: 'Test' } } });

        expect(props.onSearch).toHaveBeenNthCalledWith(1, 'Test');
    });

    it('Must fire categories event', () => {
        const component = mount(<AppBar {...props} />);

        component.find('button').simulate('click');

        expect(props.onCategoriesClick).toHaveBeenCalledTimes(1);
    });
});
