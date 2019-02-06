import React from 'reactn';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import Categories from './Categories';

export default () => {
    storiesOf('Shared Components|Categories', module)
        .addDecorator(
            host({
                title: 'Example (Width: 100%, Height: 100%):',
                align: 'center',
                minHeight: '100%',
                minWidth: '100%'
            })
        )
        .add(
            'Categories Menu usage example',
            () => <Categories show={boolean('show', true)} onClose={action('Handle Close')} />,
            {
                notes: 'Component used for news category filtering'
            }
        );
};
