import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'
import Post from '../Post/Post'


test('component', () => {
  const posts = {
    posts: [{
      title: 'How to build a progressive web app with React',
      slug: 'how-to-build-a-progressive-web-app-with-react',
      excerpt: 'One of the easiest ways to get a job',
      content: 'One of the easiest ways to get a job in the early GitHub days...'
    }]
  };
  const component = shallow(<Home posts={posts.posts} />)
  const tree = toJson(component)
  expect(component.find(Post).length).toBe(1)
  expect(tree).toMatchSnapshot()
})

test('cpme', () => {
  const component = shallow(<Home posts={[]} />)
  const tree = toJson(component)

  expect(component.find(Post).length).toBe(0)
  expect(component.contains('No posts here')).toBe(true)
  expect(tree).toMatchSnapshot()
})
