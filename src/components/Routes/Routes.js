import React from 'react'
// import { Match, Miss } from 'react-router'
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'
import NotFound from '../NotFound/NotFound'

import posts from '../../../blog-posts.json'

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" component={() => <Home posts={posts.posts} />} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/post/:slug" component={PostDetail} />
      <Route component={NotFound} />
   </Switch>
  </div>
)

export default Routes
