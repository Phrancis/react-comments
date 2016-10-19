import React from 'react'

// TODO add character count functionality
const CommentForm = (props) => (
  <form className="commentForm">
    <h2>Post a comment:</h2>
    <div>
      <label htmlFor="author">Name: </label>
      <input
        type="text"
        name="author"
        placeholder="Your name"
        value={props.author}
        onChange={props.onAuthorChange}
      />
    </div>
    <div>
      <label htmlFor="comment">Comment: </label>
      <br />
      <textarea
        placeholder="What's on your mind?"
        value={props.comment}
        onChange={props.onCommentChange}
      />
    </div>
    <button type="submit" >Post</button>
  </form>
)
CommentForm.defaultProps = {
  author: '',
  comment: ''
}
CommentForm.propTypes = {
  author: React.PropTypes.string.isRequired,
  comment: React.PropTypes.string.isRequired,
  onAuthorChange: React.PropTypes.func.isRequired,
  onCommentChange: React.PropTypes.func.isRequired
}

export default CommentForm
