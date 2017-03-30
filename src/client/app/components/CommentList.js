import React from "react"
import CommentContainer from "../containers/CommentContainer"

const CommentList = ({data}) => {
  /**
   * Map comment data into array of Comment components.
   */
  const commentList = data.map((comment) => {
    return (
      <CommentContainer id={comment.id}
                        author={comment.author}
                        timestamp={comment.timestamp}>
        {comment.text}
      </CommentContainer>
    )
  })
  return (
    <div className="commentList">
      {commentList}
    </div>
  )
}

CommentList.propTypes = {
  data: React.PropTypes.array
}

export default CommentList