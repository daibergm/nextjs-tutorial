import Renderer from 'react-test-renderer';

// @Components
import User from '../[id]';

// @models
import users from '../../../app/mocks/users';

describe('User test suit', () => {
  it('Should match the snapshot', () => {
    const Instance = Renderer.create(<User user={users[0]} />).toJSON();
    expect(Instance).toMatchSnapshot;
  });
});
