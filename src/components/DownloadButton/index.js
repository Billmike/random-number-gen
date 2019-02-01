import React from 'react';
import './DownloadButton.css';

const DownloadButton = (props) => {
  return (
    <button
      disabled={props.numbers.length === 0}
      className="download-button"
      onClick={props.onDownloadPhoneNumbers}
      style={{
        cursor: props.numbers.length === 0 ? 'not-allowed' : 'pointer',
        backgroundColor: props.numbers.length === 0 ? 'grey' : 'midnightblue'
      }}
    >
      Download Numbers
    </button>
  )
}

export default DownloadButton;
