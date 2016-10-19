import React from 'react'
import CommentListContainer from '../containers/CommentListContainer'
import CommentFormContainer from '../containers/CommentFormContainer'

const CommentBox = (props) => (
  <div className="commentBox">
    <h1>Comments</h1>
    <CommentListContainer data={props.data}/>
    <CommentFormContainer />
  </div>
)

export default CommentBox