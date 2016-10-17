import React from 'react'

const Comment = (props) => (
  <div className="comment">
    <h4 className="commentAuthor">
      {props.author}
    </h4>
    <span>
      {props.children}
    </span>
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