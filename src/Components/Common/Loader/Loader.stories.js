import React from 'reactn';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import Loader from './Loader';

export default () => {
    storiesOf('Shared Components|Loader', module)
        .addDecorator(
            host({
                title: 'Example (Width: 200px, Height: 200px):',
                align: 'center',
                minHeight: '500px',
                minWidth: '500px'
            })
        )
        .add('Usage example', () => <Loader inLoading={boolean('inLoading', true)} />, {
            notes: 'Component used for transitions'
        });
};
