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

  it('should have a select element', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Countries />
      </Provider>,
    ).root;
    expect(tree.findByType('select')).toBeTruthy();
  });

  it('should have a select element with 8 options', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Countries />
      </Provider>,
    ).root;
    expect(tree.findAllByType('option').length).toBe(8);
  });
});
