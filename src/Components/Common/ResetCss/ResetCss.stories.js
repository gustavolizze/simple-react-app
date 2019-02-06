import React from 'reactn';
import { storiesOf } from '@storybook/react';
import ResetCss from './ResetCss';

export default () => {
    storiesOf('Shared Components|ResetCss', module).add('Usage example', () => <ResetCss />, {
        notes: 'Componente usado para reset de css.'
    });
};
