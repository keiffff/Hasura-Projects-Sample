import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { urlBuilderFromRoutes } from 'constants/routes';

type Props = {
  pageTitle?: string;
  userId?: string;
};

export const GlobalHeader = ({ pageTitle = 'Hello, World!', userId }: Props) => (
  <header css={baseStyle}>
    <h1 css={pageTitleStyle}>{pageTitle}</h1>
    <div>
      {userId ? (
        <Link css={linkStyle} to={urlBuilderFromRoutes.profileShow(userId)}>
          ProfileShow
        </Link>
      ) : null}
    </div>
  </header>
);

const baseStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const pageTitleStyle = css({
  margin: 0,
  fontSize: 24,
});

const linkStyle = css({
  display: 'inline-block',
  textDecoration: 'none',
  '& + &': {
    marginLeft: 8,
  },
});
