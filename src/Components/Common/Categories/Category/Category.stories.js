import React from 'reactn';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Category from './Category';

const notes = {
    notes: 'Category of news'
};

export default () => {
    storiesOf('Shared Components|Categories', module).add(
        'Category usage example',
        () => (
            <Category
                category={text('category', 'Football')}
                redirect={text('redirect', '/football')}
            />
        ),
        notes
    );
};
