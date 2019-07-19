import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App component', () => {
  let wrapper;

  describe('shallow', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    test('should have mounted the component', () => {
     expect(wrapper).toBeDefined(); 
    });
  });
});
