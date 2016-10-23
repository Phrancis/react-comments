import React from 'react'
import CommentList from '../components/CommentList'
import comments from '../data/comments'

class CommentListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      numComments: 0
    }
    this.POLL_INTERVAL = 2000
    this.poll = this.poll.bind(this)
    this.updateComments = this.updateComments.bind(this)
  }

  componentDidMount() {
    this._timer = setInterval(this.poll, this.POLL_INTERVAL)
    if (comments) {
      this.updateComments()
    }
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer)
      this._timer = null
    }
  }

  updateComments() {
    this.setState({
      data: comments,
      numComments: this.state.data.length
    })
  }

  poll() {
    if (comments && comments.length != this.state.numComments) {
      this.updateComments()
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