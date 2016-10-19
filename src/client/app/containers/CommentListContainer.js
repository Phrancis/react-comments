import React from 'react'
import CommentList from '../components/CommentList'
import comments from '../data/comments'

class CommentListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pollInterval: 2000
    }
    this.loadComments = this.loadComments.bind(this)
  }

  loadComments() {
    // TODO get data with polling
  }

  componentDidMount() {
    if (comments) {
      this.setState({data: comments})
    }
  }

  render() {
    if (this.state.data !== []) {
      return (
        <CommentList data={this.state.data}/>
      )
    }
  }
}

export default CommentListContainer