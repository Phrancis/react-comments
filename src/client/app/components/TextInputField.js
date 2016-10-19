import React from 'react'

const TextInputField = (props) => (
  <input
    type="text"
    placeholder={props.placeholder}
    value={props.text}
    onChange={props.onChange}
  />
)

TextInputField.defaultProps = {
  placeholder: '',
  text: ''
}
TextInputField.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default TextInputField