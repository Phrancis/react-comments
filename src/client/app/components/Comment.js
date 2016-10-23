import React from 'react'

const Comment = (props) => (
  <div className="comment">
    <p className="commentText">
      {props.children}
    </p>
    <span className="commentAuthor">
      - {props.author}
    </span>
    <span className="commentTimestamp">, posted on {props.timeStamp}</span>

  </div>
)

Comment.defaultProps = {
  author: "Anonymous",
  children: <em>(empty)</em>
}

Comment.propTypes = {
  author:   React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired
}

export default Comment