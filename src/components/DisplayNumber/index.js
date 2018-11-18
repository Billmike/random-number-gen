import React from 'react';
import './DisplayNumbers.css'

const DisplayNumber = (props) => {
  return (
    <div className="number-container">
      <div className="number-count">Total Phone Numbers Generated: {props.phoneNumbers.length}</div>
      {props.phoneNumbers.map((phoneNumber, i) => {
        return (
          <div className="phone-number" key={i}>
            {`090${phoneNumber.userPhoneNumber}`}
          </div>
        )
      })}
    </div>
  )
}

export default DisplayNumber;
