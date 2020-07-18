import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
};

export const Outlined = () => (
  <Button theme="outlined" onClick={action('clicked')}>
    Hello
  </Button>
);

export const Filled = () => (
  <Button theme="filled" onClick={action('clicked')}>
    Hello
  </Button>
);
