import React from 'react'
import CommentComponent from '../components/CommentComponent'

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CommentComponent author={this.props.author}>
        {this.props.children}
      </CommentComponent>
    )
  }
}

export default Comment