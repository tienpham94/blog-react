import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Post from './Post'

test('something', () => {
  const component = shallow(<Post />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('something', () => {
  const component = shallow(<Post titleLink />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
