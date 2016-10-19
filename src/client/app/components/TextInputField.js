import React from 'react'

const TextInputField = (props) => (
  <input
    type="text"
    placeholder={props.placeholder}
    value={props.text}
    onChange={props.onChange}
  />
)

export default TextInputField