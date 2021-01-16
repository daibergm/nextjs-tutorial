import Renderer from 'react-test-renderer';

// @Components
import Header from '../Header';

describe('Header test suit', () => {
  it('Should match the snapshot', () => {
    const Instance = Renderer.create(<Header />).toJSON();
    expect(Instance).toMatchSnapshot;
  });
});
