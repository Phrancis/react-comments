import React from 'react'

class TextInputFieldContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}

export default TextInputFieldContainer