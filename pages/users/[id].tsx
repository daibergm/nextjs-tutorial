import { NextPage } from 'next';
import Fetch from 'isomorphic-fetch';

// @Components
import BaseLayout from '../../app/components/layouts/BaseLayout';

// @constants
import { apiUrl } from '../../app/constants';

// @models
import { User } from '../../app/models/User';

type Props = {
  user: User
}

const UserPage: NextPage<Props> = ({ user }) => {
  const name = `${user.first_name} ${user.last_name}`;

  return (
    <BaseLayout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card-header text-center">
            <img src={user.avatar} alt={name} className="avatar" />
          </div>
          <div className="card-body text-center">
            <h3>{name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

UserPage.getInitialProps = async ({ query }) => {
  const res = await Fetch(`${apiUrl}users/${query.id}`);
  const { data } = await res.json();
  return { user: data };
};

export default UserPage;
