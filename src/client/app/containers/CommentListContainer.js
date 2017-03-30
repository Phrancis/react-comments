import React from "react"
import CommentList from "../components/CommentList"
import comments from "../data/comments"

class CommentListContainer extends React.Component {

  /**
   * Constructor.
   * Set the state to contain no comments.
   * @param props
   */
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      numComments: 0
    }
    this.pollInterval = 500
    this.updateComments = this.updateComments.bind(this)
    this.poll = this.poll.bind(this)
  }

  /**
   * Set a timer to poll for changes at a certain interval
   * and update the state if any comments are found.
   * TODO perhaps this could be done asynchronously instead of using a timer
   */
  componentDidMount() {
    this._timer = setInterval(this.poll, this.pollInterval)
    if (comments) {
      this.updateComments()
    }
  }

  /**
   * Clear the timer when this component is removed.
   */
  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer)
      this._timer = null
    }
  }

  /**
   * Update the state of the component with the current data in props.
   */
  updateComments() {
    this.setState({
      data: comments,
      numComments: this.state.data.length
    })
  }

  /**
   * Poll props vs. state to find out if any change has occurred
   * and updates state accordingly.
   */
  poll() {
    if (comments && comments.length !== this.state.numComments) {
      this.updateComments()
    }
  }

  /**
   * Render the component if comments are found.
   * @returns {XML}
   */
  render() {
    if (this.state.data !== []) {
      return (
        <CommentList data={this.state.data}/>
      )
    }
  }
}

export default CommentListContainer