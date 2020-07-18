import React from 'react';
import { css, keyframes } from '@emotion/core';

export const LoadingIndicator = () => <div css={baseStyle} />;

const spinAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const baseStyle = css({
  border: '5px solid #f3f3f3',
  borderTop: '5px solid #555555',
  borderRadius: '50%',
  width: 50,
  height: 50,
  animation: `${spinAnimation} 1s linear infinite`,
});
