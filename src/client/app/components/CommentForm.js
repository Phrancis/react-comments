import React from 'react'

const CommentForm = (props) => (
  <form className="commentForm" onSubmit={props.onSubmit}>
    <h3 className="commentFormHeader">Post a comment:</h3>
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
        name="comment"
        value={props.comment}
        onChange={props.onCommentChange}
      />
    </div>
    <button type="submit">Post</button>
    <p>{props.charsLeft}/{props.charLimit}</p>
  </form>
)
CommentForm.defaultProps = {
  author: '',
  comment: '',
  charsLeft: 0,
  charLimit: 0
}
CommentForm.propTypes = {
  author: React.PropTypes.string.isRequired,
  comment: React.PropTypes.string.isRequired,
  charsLeft: React.PropTypes.number.isRequired,
  onAuthorChange: React.PropTypes.func.isRequired,
  onCommentChange: React.PropTypes.func.isRequired
}

export default CommentForm
