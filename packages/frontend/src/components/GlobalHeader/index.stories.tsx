import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withKnobs, text } from '@storybook/addon-knobs';
import { GlobalHeader } from '.';

export default {
  component: GlobalHeader,
  title: 'GlobalHeader',
  decorators: [withKnobs],
};

export const basic = () => (
  <BrowserRouter>
    <GlobalHeader pageTitle={text('Page Title', 'Hello')} />
  </BrowserRouter>
);
