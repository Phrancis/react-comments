import React from 'react'
import CommentForm from '../components/CommentForm'

// TODO add character count functionality
class CommentFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      comment: ''
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }

  handleCommentChange(event) {
    this.setState({ comment: event.target.value })
  }

  render() {
    return (
      <CommentForm
        author={this.state.author}
        text={this.state.comment}
        onAuthorChange={this.handleAuthorChange}
        onCommentChange={this.handleCommentChange}
      />
    )
  }
}

export default CommentFormContainer