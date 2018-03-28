import React from 'react'

import styles from './Post.css'

const Post = () => (
  <div>
    <h2 className={styles.title}><a href='#'>Blog title</a></h2>
    <p className={styles.content}>Content</p>
  </div>
)

export default Post