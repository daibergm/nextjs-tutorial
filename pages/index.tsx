import { NextPage } from 'next';
import Fetch from 'isomorphic-fetch';

// @constants
import { apiUrl } from '../app/constants';

// @Components
import BaseLayout from '../app/components/layouts/BaseLayout';
import Users from '../app/components/users/Users';

// @models
import { User } from '../app/models/User';

type Props = {
  users: User[]
}

const Home: NextPage<Props> = ({ users }) => {
  return (
    <BaseLayout pageName="Home">
      <>
        <h1>Home</h1>
        <Users users={users} />
      </>
    </BaseLayout>
  );
};

Home.getInitialProps = async () => {
  const res = await Fetch(`${apiUrl}users?page=2`);
  const { data } = await res.json();
  return { users: data };
};

export default Home;
