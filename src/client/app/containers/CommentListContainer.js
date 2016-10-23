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
    this.startPolling = this.startPolling.bind(this)
    this.poll = this.poll.bind(this)
  }

  componentDidMount() {
    this._timer = setInterval(this.poll, this.state.pollInterval)
    if (comments) {
      this.setState({data: comments})
    }
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer)
      this._timer = null
    }
  }

  poll() {
    console.log("Polling" + this._timer)
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