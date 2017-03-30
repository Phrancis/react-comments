import React from "react"
import Comment from "../components/Comment"

const CommentContainer = ({author, timestamp, children}) => (
  <Comment author={author}
           timestamp={timestamp}>
    {children}
  </Comment>
)

CommentContainer.propTypes = {
  author:     React.PropTypes.string.isRequired,
  timestamp:  React.PropTypes.string.isRequired,
  children:   React.PropTypes.any.isRequired
}

export default CommentContainer