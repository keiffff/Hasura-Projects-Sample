import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { css as cssOrigin, SerializedStyles } from '@emotion/core';

type Props = {
  children: ReactNode;
  css?: SerializedStyles;
  theme?: 'outlined' | 'filled';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, theme = 'outlined', css, type = 'button', ...rest }: Props) => (
  <button css={[style[theme], css]} type={type} {...rest}>
    {children}
  </button>
);

const baseStyle = cssOrigin({
  display: 'inline-block',
  padding: '6px 20px',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  lineHeight: 1.6,
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  boxShadow: '1px 4px 8px rgba(0,0,0,.3)',
  touchAction: 'manipulation',
  userSelect: 'none',
  border: '1px solid #333333',
  borderRadius: '5px',
  outline: 'none',
});

const style = {
  outlined: baseStyle,
  filled: cssOrigin(baseStyle, {
    backgroundColor: 'hotpink',
    color: 'white',
    border: '1px solid transparent',
  }),
} as const;
