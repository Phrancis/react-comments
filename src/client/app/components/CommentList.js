import React from "react"
import CommentContainer from "../containers/CommentContainer"

const CommentList = (props) => {
  // Parse comment data into a list of comments to be rendered:
  let commentNodes = props.data.map(function(comment) {
    return (
      <CommentContainer
        id={comment.id}
        author={comment.author}
        timestamp={comment.timestamp}
      >
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

CommentList.propTypes = {
  data: React.PropTypes.array
}

export default CommentList