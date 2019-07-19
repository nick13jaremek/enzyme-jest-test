import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AlertBox from '../src/components/AlertBox';

describe('AlertBox component', () => {
  let wrapper;
  let store;
  let mockStore;

  beforeAll(() => {
    const middlewares = [];
    mockStore = configureStore(middlewares);
  });

  describe('shallow', () => {
    beforeEach(() => {
      store = mockStore({});
      wrapper = shallow(
        <Provider store={store}>
        <AlertBox />
        </Provider>);
    });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should have mounted the component', () => {
      expect(wrapper).toBeDefined();
    });

    test('should have an AlertBox  component', () => {
      expect(wrapper.find(AlertBox)).toHaveLength(1);
    });

    test('should not render the button of the AlertBox component', () => {
      expect(wrapper.find('button')).toHaveLength(0);
    });
  });

  describe('Mount', () => {
    beforeEach(() => {
      store = mockStore({});
      wrapper = mount(
        <Provider store={store}>
          <AlertBox />
        </Provider>);
    });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should have a button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });

    test('should add a new message to the store when clicking the button', () => {
      const button = wrapper.find('button').first();
      expect(button).toBeDefined();

      button.simulate('click');

      const expectedActions = [
        {
          type: 'ALERT_CREATED',
          data: 'New alert message',
        }
      ];
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
