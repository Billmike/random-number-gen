import React from 'react';
import DisplayNumbers from '../DisplayNumber';
import { connect } from 'react-redux';
import FileSaver from 'file-saver';
import swal from 'sweetalert';
import { addNumbers, sortNumbersAscending, sortNumbersDescending } from '../../redux/action/numbersAction';
import './Main.css';

class Main extends React.Component {
  state = {
    selectValue: "Select sorting order"
  }

  onAddPhoneNumber = () => {
    const createdPhoneNumber = Math.floor(45367689 + Math.random() * 9998167);
    swal("Success!", "New number generated", "success");
    this.props.addNumbers(createdPhoneNumber);
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
    const phoneNumbers = this.props.numbers.map(phoneNumber => phoneNumber.userPhoneNumber);
    const maxNumber = Math.max(...phoneNumbers);
    const minNumber = Math.min(...phoneNumbers)
    return (
      <div className="minimax-container">
        <div className="max">
        The maximum generated phone Number: {`090${maxNumber}`}
        </div>
        <div>
        The minimum generated phone Number: {`090${minNumber}`}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="button-container">
          <button className="button-style" onClick={this.onAddPhoneNumber}>Generate Phone Number</button>
          <button className="download-button" onClick={this.onDownloadPhoneNumbers}>Download Numbers</button>
          <div className="select-container">
          <label className="select-label">
            Choose sorting order
            </label>
          <select onChange={this.onSortNumber}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
          </select>
        </div>
        </div>
        {this.renderMaxNumber()}
        <DisplayNumbers
          phoneNumbers={this.props.numbers}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    numbers: state.numbers.data
})

export default connect(mapStateToProps, { addNumbers, sortNumbersAscending, sortNumbersDescending })(Main);
