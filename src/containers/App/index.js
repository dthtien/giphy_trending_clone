import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import { loadImages } from './services';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.loadImages()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  loadImages: bindActionCreators(loadImages, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
