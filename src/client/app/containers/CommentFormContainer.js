import React from 'react'
import CommentForm from '../components/CommentForm'

class CommentFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      text: ''
    }
  }

  render() {
    return (
      <CommentForm/>
    )
  }
}

export default CommentFormContainer