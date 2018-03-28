import React from 'react'
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import About from './About'

test('something', () => {
  const component = shallow(<About />)
  console.log(component)
});
