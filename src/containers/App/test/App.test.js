import React from 'react';
import { mount, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { initialState as appState, loadImages, LOAD_IMAGES } from '../services';
import ConnectedApp, { App } from '..';
import { Loader } from '../../../components';

configure({ adapter: new Adapter() });

const initialState = { app: appState };
const mockStore = configureStore();

describe('App -> Snapshot', () => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
  );

  it('-> render the connected component', () => {
    expect(wrapper.find(ConnectedApp).length).toEqual(1);
  });

  it('-> should have props matches with initialState', () => {
    expect(wrapper.find(App).prop('images')).toEqual(initialState.app);
  });

  it('-> should containt Loader', () => {
    expect(wrapper.contains(<Loader />)).toBe(true);
  });

  it('-> should call loadImages action when dispatched', () => {
    store.dispatch(loadImages());
    const actions = store.getActions();
    expect(actions[0].type).toBe(LOAD_IMAGES);
  });
});
