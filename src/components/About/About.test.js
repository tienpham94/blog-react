import React from 'react'
import { shallow } from 'enzyme'
import About from './About'

test('About component should render as expected', () => {
  const component = shalow(<About />)
  console.log(component);
})