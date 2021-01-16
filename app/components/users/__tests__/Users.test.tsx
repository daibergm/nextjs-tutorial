import Renderer from 'react-test-renderer';
import Router from 'next/router';

// @Components
import Users from '../Users';

// @Mocks
import users from '../../../mocks/users';

Router.router = {
  push: () => {},
  prefetch: () => {},
};

describe('Users test suit', () => {
  it('Should match the snapshot', () => {
    const Instance = Renderer.create(<Users users={users} />).toJSON();
    expect(Instance).toMatchSnapshot;
  });

  it('Click to navigate', () => {
    const Component = Renderer.create(<Users users={users} />);
    const instance = Component.root;
    const li = instance?.findByType('li');
    li.props.onClick();
  });
});
