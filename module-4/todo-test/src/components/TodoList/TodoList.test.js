import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';

const todos = [
  { id: 0, text: 'Fazer café'},
  { id: 1, text: 'Fazer café2'},
  { id: 2, text: 'Fazer café3'},
  { id: 3, text: 'Fazer café4'},
]

it('should render todos', () => {
  const wrapper = shallow(<TodoList />)

  wrapper.setState({todos})

  expect(wrapper.find('li')).toHaveLength(4)
})
