/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'antd';
import { createStructuredSelector } from 'reselect';
import { loadImages, makeSelectImages } from './services';
import './App.scss';
import logo from '../../logo.svg';
import { Loader } from '../../components';
import ImageItem from './components/ImageItem';
import PreviewImageModal from './components/PreviewImageModal';
import { getUnique } from '../../utils';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      showingImageUrl: null,
      images: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      images: { data },
    } = nextProps;
    const { images } = prevState;
    let updatingState = {};

    if (data && images !== data) {
      updatingState = {
        ...updatingState,
        images: getUnique(images.concat(data), 'id'),
      };
    }

    return Object.assign(prevState, updatingState);
  }

  componentDidMount() {
    this.props.loadImages();
  }

  handleClosePreviewModal = () => {
    this.setState({
      visible: false,
      showingImageUrl: null,
    });
  };

  handleOpenPreviewModal = url => {
    this.setState({
      visible: true,
      showingImageUrl: url,
    });
  };

  handleClickOnLogo = () => {
    this.props.loadImages();
  };

  render() {
    const {
      images: { loading },
    } = this.props;
    const { images } = this.state;
    const { visible, showingImageUrl } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {visible && (
          <PreviewImageModal
            visible={visible}
            onClose={this.handleClosePreviewModal}
            src={showingImageUrl}
          />
        )}
        <Row>
          {images.map(image => (
            <ImageItem
              key={image.id}
              image={image}
              onClick={this.handleOpenPreviewModal}
            />
          ))}
        </Row>
        <div className="App-header">
          <Loader spin={loading} onClick={this.handleClickOnLogo} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loadImages: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadImages: bindActionCreators(loadImages, dispatch),
});

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
