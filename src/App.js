import React from 'react'

import 'normalize.css'
import styles from './App.css'
import Header from './components/Header/Header'
import Post from './components/Post/Post'

const App = () => (
  <div>
    <Header />
    <div className={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
)

export default App
