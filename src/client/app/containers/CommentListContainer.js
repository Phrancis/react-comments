import React from 'react'
import CommentList from '../components/CommentList'
import comments from '../data/comments'

class CommentListContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CommentList data={comments}/>
    )
  }
}

export default CommentListContainer