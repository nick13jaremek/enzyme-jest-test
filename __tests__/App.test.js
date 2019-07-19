import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Header from '../src/Header';
import Footer from '../src/Footer';

describe('App component', () => {
  let wrapper;

  describe('shallow', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should have mounted the component', () => {
     expect(wrapper).toBeDefined(); 
    });

    test('should have a Header component', () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });

    test('should have a Footer component', () => {
      expect(wrapper.find(Footer)).toHaveLength(1);
    });


    test('should not find the header component class name', () => {
      expect(wrapper.find('.header')).toHaveLength(0);
    });

    test('should not find the footer component class name', () => {
      expect(wrapper.find('.footer')).toHaveLength(0);
    });
  });

  describe('mount', () => {
    beforeEach(() => {
      wrapper = mount(<App />);
    });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should have mounted the component', () => {
      expect(wrapper).toBeDefined();
    });

    test('should have a Header component wrapping the actual component markup code', () => {
      console.log(wrapper.debug());
      expect(wrapper.find(Header)).toHaveLength(1);

      expect(wrapper.find('.header')).toHaveLength(1);
    });

    test('should have a Footer component as-is', () => {
      expect(wrapper.find(Footer)).toHaveLength(1);

      expect(wrapper.find('.footer')).toHaveLength(1);
    });
  });
});
