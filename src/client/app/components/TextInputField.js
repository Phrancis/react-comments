import React from 'react'


/*
 * TODO make this work TextInputFieldContainer
 * Explanation: At the moment this "dumb" component is unusable
 * because I was not able to make it work with the handleChange event
 * handler for unknown reason. The problem was that the input field could
 * not be typed into when rendered on the page.
 * I opted for the moment to render the <input> component within
 * TextInputFieldContainer in order for the fields to be functional.
 */

const TextInputField = (props) => (
  <input
    type="text"
    placeholder={props.placeholder}
    value={props.text}
  />
)

export default TextInputField