import React from 'react';
import { shallow } from 'enzyme'
import App from './App'

it('should render as expected', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true)
})