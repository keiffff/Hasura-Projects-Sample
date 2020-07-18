import React from 'react';
import { css } from '@emotion/core';

type Props = {
  title?: string;
};

export const PageTitle = ({ title = 'Hello, World!' }: Props) => <h1 css={baseStyle}>{title}</h1>;

const baseStyle = css({
  margin: 0,
  fontSize: 24,
});
