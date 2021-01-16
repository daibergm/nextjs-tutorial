import Renderer from 'react-test-renderer';

// @Components
import Services from '../services';

describe('Services test suit', () => {
  it('Should match the snapshot', () => {
    const Instance = Renderer.create(<Services />).toJSON();
    expect(Instance).toMatchSnapshot;
  });
});
