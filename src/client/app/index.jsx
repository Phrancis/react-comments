import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './containers/CommentBoxContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <CommentBox/>
      </div>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
