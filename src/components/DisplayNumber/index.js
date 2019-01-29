import React from 'react';
import Paginate from '../Pagination';
import './DisplayNumbers.css';

class DisplayNumber extends React.Component {
  state = {
    paginatedNumbers: {},
    generatedPhoneNumbers: [],
    totalPages: 0,
    currentPage: 1,
    phoneNumbersPerPage: 10
  }

  static getNumbers = (phoneNumbers, page, displayPerPage) => {
    const offset = (page - 1) * displayPerPage;

    const paginatedNumbers = phoneNumbers.slice(offset).slice(0, displayPerPage);
    const totalPages = Math.ceil(phoneNumbers.length / displayPerPage);

    const items = {
      page,
      displayPerPage,
      totalPages,
      nextPage: (totalPages > page) ? page + 1 : null,
      previousPage: page - 1 ? page - 1 : null,
      total: phoneNumbers.length,
      phoneNumberData: paginatedNumbers
    };

    return items;
  }

  componentDidMount() {
    const { phoneNumbers } = this.props;
    const { currentPage } = this.state;
    const paginatedNumbers = DisplayNumber.getNumbers(phoneNumbers, currentPage, 10);
    const { totalPages } = paginatedNumbers;
    this.setState({
      paginatedNumbers,
      totalPages,
      generatedPhoneNumbers: phoneNumbers,
      currentPage
    })
  }

  static getDerivedStateFromProps(props, state) {
    const { phoneNumbers, hasGeneratedNumbers } = props;
    const { currentPage } = state;
    if (hasGeneratedNumbers) {
      const paginatedNumbers = DisplayNumber.getNumbers(phoneNumbers, currentPage, 10);
      const { totalPages } = paginatedNumbers;
      return {
        paginatedNumbers,
        totalPages,
        phoneNumbers,
        currentPage
      }
    }

    return null;
  }

  handlePageClick = (data) => {
    const { selected } = data;
    const { generatedPhoneNumbers } = this.state;
    const currentPage = Math.ceil(selected) + 1;
    const paginatedNumbers = DisplayNumber.getNumbers(generatedPhoneNumbers, currentPage, 10);
    const { totalPages } = paginatedNumbers;
    this.setState({
      paginatedNumbers,
      totalPages,
      generatedPhoneNumbers,
      currentPage
    })
  }

  onPageChange = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const { paginatedNumbers, totalPages } = this.state;
    return (
      <div className="container-style">
      {
        paginatedNumbers.phoneNumberData && paginatedNumbers.phoneNumberData.length > 0
      && paginatedNumbers.phoneNumberData.map((phoneNumbers, index) => {
        console.log(phoneNumbers);
        return (
          <div className="number-style" key={index}>
            {`090${phoneNumbers.userPhoneNumber}`}
          </div>
        )
      })}
      {paginatedNumbers.phoneNumberData && paginatedNumbers.phoneNumberData.length >= 1 && (<Paginate
        pages={totalPages}
        handlePageClick={this.handlePageClick}
      />)}
      </div>
    )
  }
}

export default DisplayNumber;
