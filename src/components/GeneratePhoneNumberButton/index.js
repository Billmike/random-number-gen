import React from 'react';
import './GeneratePhoneNumberButton.css';

const GeneratePhoneNumberButton = (props) => {
  return (
    <button
      className="button-style"
      style={{
        backgroundColor: props.generatingValue.trim() === '' ? 'grey' : 'midnightblue',
        cursor: props.generatingValue.trim() === '' ? 'not-allowed' : 'pointer'
      }}
      onClick={props.onAddPhoneNumber}
      disabled={props.generatingValue.trim() === ''}
    >
    Generate Phone Number
    </button>
  )
}

export default GeneratePhoneNumberButton;
