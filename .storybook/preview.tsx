import type { Preview } from '@storybook/react-vite'
// import { themes } from 'storybook/theming';
import type { Decorator } from '@storybook/react';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark', 'MLC'],
      showName: true,
    },
  },
};

const withThemeClass: Decorator = (Story, context) => {
  const theme = context.globals.theme;

  // Reset and apply theme class to document.body
  document.body.className = ''; // clear existing classes
  document.body.classList.add(`theme-${theme}`);

  return <Story />;
};

export const decorators = [withThemeClass];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    docs: {
      // theme: themes.dark,
    },
  },
};

export default preview;