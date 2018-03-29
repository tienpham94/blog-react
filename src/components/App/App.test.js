import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

test('sample', () => {
  const component = shallow(<App />)
  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})
