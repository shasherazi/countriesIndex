import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Country from '../components/Country';

describe('Country', () => {
  it('should render the component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Country name="Pakistan" flagEmoji="🇵🇰" continent="Asia" />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
