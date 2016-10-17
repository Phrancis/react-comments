import React from 'react'
import CommentList from '../containers/CommentList'
import CommentForm from '../containers/CommentForm'

const CommentBoxComponent = (props) => (
  <div className="commentBox">
    <h1>Comments</h1>
    <CommentList/>
    <CommentForm/>
  </div>
)

export default CommentBoxComponent