import Renderer from 'react-test-renderer';

// @Components
import BaseLayout from '../BaseLayout';

describe('BaseLayout test suit', () => {
  it('Should match the snapshot', () => {
    const Instance = Renderer.create(<BaseLayout><h1>Hello!</h1></BaseLayout>).toJSON();
    expect(Instance).toMatchSnapshot;
  });
});
