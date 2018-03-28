import React from 'react'
import { BrowserRouter, Match } from 'react-router'

import 'normalize.css'
import styles from './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Post from './components/Post/Post'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Match exactly pattern='/about' component={About} />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  </BrowserRouter>
)

export default App
