import React from "react"
import formatTimestamp from "../utils/formatTimestamp"

// TODO the `comment` and `commentAuthor` CSS do not wrap long words with no spaces so they just bleed out of the HTML component
const Comment = ({author, timestamp, children}) => (
  <div className="comment">
    <p className="commentText">
      {children}
    </p>
    <span className="commentAuthor">
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