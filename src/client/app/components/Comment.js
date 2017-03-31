import React from "react"
import formatTimestamp from "../utils/formatTimestamp"

const Comment = ({author, timestamp, children}) => (
  <div className="comment preventBreakOut">
    <p className="commentText preventBreakOut">
      {children}
    </p>
    <span className="commentAuthor preventBreakOut">
      - {author}
    </span>
    <span className="commentTimestamp">
      , posted on {timestamp ? formatTimestamp(timestamp) : "unknown date"}
    </span>
  </div>
)

Comment.defaultProps = {
  author:   <em>(author unknown)</em>,
  children: <em>(empty)</em>
}

Comment.propTypes = {
  author:     React.PropTypes.string.isRequired,
  children:   React.PropTypes.any.isRequired,
  timestamp:  React.PropTypes.string.isRequired
}

export default Comment