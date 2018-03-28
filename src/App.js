import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import 'normalize.css'
import styles from './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Post from './components/Post/Post'
import NotFound from './components/NotFound/NotFound'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Match exactly pattern='/about' component={About} />
        <Miss component={NotFound} />
      </div>
    </div>
  </BrowserRouter>
)

export default App
