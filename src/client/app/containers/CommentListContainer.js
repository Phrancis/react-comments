import React from 'react'
import CommentList from '../components/CommentList'

class CommentListContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CommentList/>
    )
  }
}

export default CommentListContainer