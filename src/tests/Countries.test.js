import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Countries from '../components/Countries';

describe('Countries', () => {
  it('should render the component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Countries />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
