import React from 'react'
import TextInputFieldContainer from '../containers/TextInputFieldContainer'

const CommentForm = (props) => (
  <form className="commentForm">
    <h2>Post a comment:</h2>
    <p>
      <TextInputFieldContainer placeholder="Your name" />
    </p>
    <p>
      <TextInputFieldContainer placeholder="What's on your mind?" />
    </p>
    <p>
      <input type="submit" value="Post" />
    </p>
  </form>
)

export default CommentForm
