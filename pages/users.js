import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

function User({ users }) {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.login}`}>
              <a>{ user.login }</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    'https://api.github.com/orgs/facebook/members'
  );

  return { props: { users: response.data } };
};

export default withAnalytics()(User);
