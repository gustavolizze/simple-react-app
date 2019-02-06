import React from 'reactn';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import AppBar from './AppBar';

export default () => {
    storiesOf('Shared Components|AppBar', module).add(
        'Usage Example',
        () => (
            <AppBar
                onSearch={action('Initialize Search')}
                onCategoriesClick={action('Open Categories')}
                search={text('search', '')}
            />
        ),
        {
            notes: 'Application main taskbar'
        }
    );
};
