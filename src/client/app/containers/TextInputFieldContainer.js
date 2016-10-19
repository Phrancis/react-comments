import React from 'react'
import TextInputField from '../components/TextInputField'

class TextInputFieldContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <TextInputField
        value={this.state.text}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
    )
  }
}

export default TextInputFieldContainer