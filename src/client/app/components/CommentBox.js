import React from 'react'
import CommentList from '../containers/CommentListContainer'
import CommentForm from '../containers/CommentFormContainer'

const CommentBox = (props) => (
  <div className="commentBox">
    <h1>Comments</h1>
    <CommentList/>
    <CommentForm/>
  </div>
)

export default CommentBox