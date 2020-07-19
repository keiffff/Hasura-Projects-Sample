import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { css } from '@emotion/core';

export const LoadingScreen = () => (
  <div css={baseStyle}>
    <CircularProgress size={50} />
  </div>
);

const baseStyle = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
});
