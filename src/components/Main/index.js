import React from 'react';
import DisplayNumbers from '../DisplayNumber';
import { connect } from 'react-redux';
import FileSaver from 'file-saver';
import swal from 'sweetalert';
import { addNumbers, sortNumbersAscending, sortNumbersDescending } from '../../redux/action/numbersAction';
import './Main.css';


class Main extends React.Component {
  state = {
    generatingValue: '',
    currentPage: 1,
    hasGeneratedNumbers: false,
  }

  onAddPhoneNumber = () => {
    let arr = []
    const { generatingValue } = this.state;
    while (arr.length < generatingValue) {
      const createdPhoneNumber = Math.floor(45367689 + Math.random() * 9998167);
      arr.push({userPhoneNumber: createdPhoneNumber})
    }
    
    swal("Success!", "New phone numbers generated", "success");
    this.props.addNumbers(arr);
  }

  onDownloadPhoneNumbers = () => {
    const phoneNumbers = this.props.numbers.map(phoneNumber => phoneNumber.userPhoneNumber);
    const blob = new Blob([phoneNumbers], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "phoneNumber.txt")
    swal("Success!", "Download completed!", "success");
  }

  onSortNumber = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "Ascending") {
      this.props.sortNumbersAscending()
    } else {
      this.props.sortNumbersDescending()
    }
  }

  renderMaxNumber = () => {
    const phoneNumbers = this.props.numbers.length > 0 ?
      this.props.numbers.map(phoneNumber => phoneNumber.userPhoneNumber) : 0;
    const maxNumber = phoneNumbers === 0 ? 0 : Math.max(...phoneNumbers);
    const minNumber = phoneNumbers === 0 ? 0 : Math.min(...phoneNumbers)
    return (
      <div className="minimax-container">
        <div className="max">
        The maximum generated phone Number: {phoneNumbers === 0 ? '000' : `090${maxNumber}`}
        </div>
        <div>
        The minimum generated phone Number: {phoneNumbers === 0 ? '000' : `090${minNumber}`}
        </div>
      </div>
    )
  }

  onGeneratingValueChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ generatingValue: inputValue, hasGeneratedNumbers: true });
  }

  render() {
    return (
      <div className="container">
        <h4 className="heading-text">Random number generator</h4>
        <div className="button-container">
          <input
            className="generating-value"
            type="number"
            value={this.state.generatingValue}
            onChange={this.onGeneratingValueChange}
          />
          <div>
          <button
            className="button-style"
            style={{
              backgroundColor: this.state.generatingValue.trim() === '' ? 'grey' : 'midnightblue',
              cursor: this.state.generatingValue.trim() === '' ? 'not-allowed' : 'pointer'
            }}
            onClick={this.onAddPhoneNumber}
            disabled={this.state.generatingValue.trim() === ''}
          >
          Generate Phone Number
          </button>
          <button
            disabled={this.props.numbers.length === 0}
            className="download-button"
            onClick={this.onDownloadPhoneNumbers}
            style={{
              cursor: this.props.numbers.length === 0 ? 'not-allowed' : 'pointer',
              backgroundColor: this.props.numbers.length === 0 ? 'grey' : 'midnightblue'
            }}
          >
            Download Numbers
          </button>
          </div>
          {this.props.numbers.length > 1 && <div className="select-container">
          <label className="select-label">
            Choose sorting order
            </label>
          <select onChange={this.onSortNumber}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
          </select>
        </div>}
        </div>
        {this.props.numbers.length > 2 && this.renderMaxNumber()}
        <DisplayNumbers
          phoneNumbers={this.props.numbers}
          hasGeneratedNumbers={this.state.hasGeneratedNumbers}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    numbers: state.numbers.data
})

export default connect(mapStateToProps, { addNumbers, sortNumbersAscending, sortNumbersDescending })(Main);
