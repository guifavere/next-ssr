import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import withAnalytics from '../src/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <img src="/images/batman.jpg" width="200" />
      <Title>Hello World</Title>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
};

export default withAnalytics()(Home);