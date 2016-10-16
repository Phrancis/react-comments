import React from 'react'
import CommentListComponent from '../components/CommentListComponent'

class CommentList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CommentListComponent/>
    )
  }
}

export default CommentList