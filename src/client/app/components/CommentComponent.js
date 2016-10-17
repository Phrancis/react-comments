import React from 'react'

const CommentComponent = (props) => (
  <div className="comment">
    <h2 className="commentAuthor">
      {props.author}
    </h2>
    <span>
      {props.children}
    </span>
  </div>
)

CommentComponent.defaultProps = {
  author: "Anonymous",
  children: <em>(empty)</em>
}

CommentComponent.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired
}

export default CommentComponent