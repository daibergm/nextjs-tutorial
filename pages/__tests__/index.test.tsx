import Renderer from 'react-test-renderer';

// @Components
import Home from '../index';

// @Mocks
import users from '../../app/mocks/users';

describe('Home test suit', () => {
  it('Should match the snapshot', () => {
    const Instance = Renderer.create(<Home users={users} />).toJSON();
    expect(Instance).toMatchSnapshot;
  });
});
