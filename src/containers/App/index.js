import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Typography } from 'antd';
import { createStructuredSelector } from 'reselect';
import { loadImages, makeSelectImages } from './services';
import './App.scss';
import logo from '../../logo.svg';
import { Loader } from '../../components';
import ImageItem from './components/ImageItem';
import PreviewImageModal from './components/PreviewImageModal';
const { Text } = Typography;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: true };
  }

  componentDidMount() {
    this.props.loadImages();
  }

  handleClosePreviewModal = () => {
    this.setState({ visible: false });
  };

  handleOpenPreviewModal = () => {
    this.setState({ visible: true });
  };

  render() {
    const {
      images: { data, error },
    } = this.props;
    const { visible } = this.state;

    if (error) {
      return <Text type="danger">Error!</Text>;
    }

    if (data) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          {visible && (
            <PreviewImageModal
              visible={visible}
              onClose={this.handleClosePreviewModal}
            />
          )}
          <Row>
            {data.map(image => (
              <ImageItem
                key={image.id}
                image={image}
                onClick={this.handleOpenPreviewModal}
              />
            ))}
          </Row>
        </div>
      );
    }

    return <Loader />;
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
