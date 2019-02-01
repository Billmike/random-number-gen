import React from 'react';
import DisplayNumbers from '../DisplayNumber';
import { connect } from 'react-redux';
import FileSaver from 'file-saver';
import swal from 'sweetalert';
import { addNumbers, sortNumbersAscending, sortNumbersDescending } from '../../redux/action/numbersAction';
import MaxMin from '../MaxMin';
import GeneratePhoneNumberButton from '../GeneratePhoneNumberButton';
import DownloadButton from '../DownloadButton';
import './Main.css';


export class Main extends React.Component {
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
          <GeneratePhoneNumberButton
            generatingValue={this.state.generatingValue}
            onAddPhoneNumber={this.onAddPhoneNumber}
            />
          <DownloadButton
            numbers={this.props.numbers}
            onDownloadPhoneNumbers={this.onDownloadPhoneNumbers}
          />
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
        {this.props.numbers.length > 2 && <MaxMin numbers={this.props.numbers} />}
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
