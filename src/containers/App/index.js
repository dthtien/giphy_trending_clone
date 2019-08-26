/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import './App.scss';
import logo from '../../logo.svg';
import { Loader, withInfiniteScroll } from '../../components';
import ImageItem from './components/ImageItem';
import PreviewImageModal from './components/PreviewImageModal';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      showingImageUrl: null,
    };
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

  render() {
    const { loading, images } = this.props;
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
        <div className="App-header">{loading && <Loader />}</div>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
};

export default withInfiniteScroll(App);
