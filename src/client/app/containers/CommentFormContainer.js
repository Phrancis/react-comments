import React from 'react'
import CommentForm from '../components/CommentForm'

const MAX_CHARS = 200

class CommentFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      comment: '',
      charsLeft: MAX_CHARS
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.updateCharsLeft = this.updateCharsLeft.bind(this)
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }

  handleCommentChange(event) {
    var input = event.target.value
    var length = input.length
    if (length <= MAX_CHARS) {
      this.updateCharsLeft(length)
      this.setState({
        comment: event.target.value
      })
    }
  }

  updateCharsLeft(length) {
    this.setState({ charsLeft: MAX_CHARS - length })
  }

  render() {
    return (
      <CommentForm
        author={this.state.author}
        comment={this.state.comment}
        charsLeft={this.state.charsLeft}
        maxChars={MAX_CHARS}
        onAuthorChange={this.handleAuthorChange}
        onCommentChange={this.handleCommentChange}
      />
    )
  }
}

export default CommentFormContainer