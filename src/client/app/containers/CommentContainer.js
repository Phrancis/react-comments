import React from 'react'
import Comment from '../components/Comment'

class CommentContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Comment author={this.props.author}>
        {this.props.children}
      </Comment>
    )
  }
}

export default CommentContainer