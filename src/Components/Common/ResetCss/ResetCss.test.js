import React from 'reactn';
import { mount } from 'enzyme';
import ResetCss from './ResetCss';

describe('ResetCss Component', () => {
    it('renders without crashing', () => {
        mount(<ResetCss />);
    });
});
