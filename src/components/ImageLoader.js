/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-underscore-dangle
const _loaded = {};

class ImageLoader extends Component {
  // initial state: image loaded stage
  constructor(props) {
    super(props);
    this.state = {
      loaded: _loaded[props.src],
    };
  }

  // image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {
    const { loadedClassName, loadingClassName, alt } = this.props;
    let { className } = this.props;

    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`;

    return (
      <img
        src={this.props.src}
        onClick={this.props.onClick}
        className={className}
        onLoad={this.onLoad}
        loading="lazy"
        alt={alt}
      />
    );
  }
}

ImageLoader.propTypes = {
  className: PropTypes.string,
  loadedClassName: PropTypes.string,
  loadingClassName: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

ImageLoader.defaultProps = {
  className: '',
  loadingClassName: 'img-loading',
  loadedClassName: 'img-loaded',
};

export default ImageLoader;
