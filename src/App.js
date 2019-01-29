import React, { Component } from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
