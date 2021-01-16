import Router from 'next/router';

// @models
import { User } from '../../models/User';

type Props = {
  users: User[]
}

const navigate = (id: number) => Router.push('/users/[id]', `/users/${id}`);

function Users({ users }: Props) {
  return (
    <ul className="list-group">
      {users.map(user => {
        const name = `${user.first_name} ${user.last_name}`;

        return (
          <li
            key={user.id}
            className="text-center list-group-item list-group-item-action d-sm-flex justify-content-between cursor-pointer"
            onClick={() => navigate(user.id)}
          >
            <img src={user.avatar} alt={name} className="avatar" />
            <div className="d-flex flex-dir-col justify-content-center">
              <h5>{name}</h5>
              <p>{`Email: ${user.email}`}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Users;
