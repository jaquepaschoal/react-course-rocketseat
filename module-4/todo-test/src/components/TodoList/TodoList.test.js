import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';

const todos = [
  { id: 0, text: 'Fazer café'},
  { id: 1, text: 'Fazer café2'},
  { id: 2, text: 'Fazer café3'},
  { id: 3, text: 'Fazer café4'},
]

describe('TodoList component', () => {
  it('should render todos', () => {
    const wrapper = shallow(<TodoList />)

    wrapper.setState({todos})

    expect(wrapper.find('li')).toHaveLength(4)
  })

  it('should be able to add new todo', () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({todos})

    wrapper.find('button').simulate('click')

    expect(wrapper.state('todos')).toHaveLength(5)
  })

  it('should be able to remove todo', () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({todos})

    wrapper.find('li').first().simulate('click');

    expect(wrapper.state('todos')).not.toContain(todos[0])
  })

})

