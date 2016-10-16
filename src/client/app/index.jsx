import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './containers/CommentBox'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Comments Demo</h1>
        <CommentBox/>
      </div>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
