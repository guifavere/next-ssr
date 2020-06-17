import React from 'react';
import axios from 'axios';

import withAnalytics from '~/hocs/withAnalytics';

function Detail({ user }) {
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} width="200" />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { user } = query;
  const response = await axios.get(`https://api.github.com/users/${user}`);

  return { props: { user: response.data } };
};

export default withAnalytics()(Detail);