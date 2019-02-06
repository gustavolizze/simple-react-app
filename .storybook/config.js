import { configure, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { host } from 'storybook-host';
import StoryRouter from 'storybook-react-router';

function loadStories() {
  require('./../src/stories');
}

addDecorator(host({
  title: 'Example (Width: 50%, Height: 50%):',
  align: 'center',
  minHeight: '50vh',
  minWidth: '50vw',
}));
addDecorator(StoryRouter());
addDecorator(muiTheme());
addDecorator(withNotes);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
}));

configure(loadStories, module);
