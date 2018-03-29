import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

import Routes from './Routes'
import Home from '../Home/Home'
import About from '../About/About'

test('should render the Home component when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(Home).length).toBe(1)
})

test('should render the About component when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/about' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(About).length).toBe(1)
})