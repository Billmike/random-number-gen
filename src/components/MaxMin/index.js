import React from 'react';
import './MaxMin.css';

const MaxMin = (props) => {
  const phoneNumbers = props.numbers.length > 0 ? props.numbers.map(phoneNumber => phoneNumber.userPhoneNumber) : 0;
  const maxNumber = phoneNumbers === 0 ? 0 : Math.max(...phoneNumbers);
  const minNumber = phoneNumbers === 0 ? 0 : Math.min(...phoneNumbers);
  return (
    <div className="minimax-container">
      <div className="max">
        The maximum generated Phone Number: {phoneNumbers === 0 ? '000' : `090${maxNumber}`}
      </div>
      <div>
        The minimum generated Phone Number: {phoneNumbers === 0 ? '000' : `090${minNumber}`}
      </div>
    </div>
  )
}

export default MaxMin;
