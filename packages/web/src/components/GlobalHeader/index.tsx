import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { routes } from 'constants/routes';
import { PageTitle } from './PageTitle';

type Props = {
  pageTitle?: string;
};

export const GlobalHeader = ({ pageTitle }: Props) => (
  <div css={baseStyle}>
    <PageTitle title={pageTitle} />
    <div>
      {Object.entries(routes).map(([k, v]) => (
        <Link css={linkStyle} key={k} to={v}>
          {k}
        </Link>
      ))}
    </div>
  </div>
);

const baseStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const linkStyle = css({
  display: 'inline-block',
  textDecoration: 'none',
  '& + &': {
    marginLeft: 8,
  },
});
