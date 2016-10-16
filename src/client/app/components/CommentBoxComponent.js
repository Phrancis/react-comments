import React from 'react'
import CommentList from '../containers/CommentList'
import CommentForm from '../containers/CommentForm'

const CommentBoxComponent = (props) => (
  <div className="commentBox">
    Hello, world! I am a <code>CommentBox</code>.
    <CommentList/>
    <CommentForm/>
  </div>
)

export default CommentBoxComponent