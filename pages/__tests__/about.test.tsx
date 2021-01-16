import Renderer from 'react-test-renderer';

// @Components
import About from '../about';

describe('About test suit', () => {
  it('Should match the snapshot', () => {
    const Instance = Renderer.create(<About />).toJSON();
    expect(Instance).toMatchSnapshot;
  });
});
