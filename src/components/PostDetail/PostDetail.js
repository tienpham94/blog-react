import React from 'react'

import Post from '../Post/Post'
import posts from '../../../blog-posts.json'

const PostDetail = ({ match }) => {
    const post = posts.posts.filter(post => match.params.slug === post.slug)
    return (
      <div>
       <Post {...post[0]} />
      </div>
    )
}

export default PostDetail
