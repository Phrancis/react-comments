import React from 'react'
import CommentContainer from '../containers/CommentContainer'

function CommentList(props) {
  // Parse comment data into a list of comments to be rendered into a div:
  let commentNodes = props.data.map(function(comment) {
    return (
      <CommentContainer id={comment.id} author={comment.author}>
        {comment.text}
      </CommentContainer>
    )
  })
  return (
    <div className="commentList">
      {commentNodes}
    </div>
  )
}

export default CommentList