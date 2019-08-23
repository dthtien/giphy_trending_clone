/* eslint-disable react/prop-types */
import React, { Component } from 'react';

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
    let { className, loadedClassName, loadingClassName, alt } = this.props;

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

ImageLoader.defaultProps = {
  className: '',
  loadingClassName: 'img-loading',
  loadedClassName: 'img-loaded',
};

export default ImageLoader;
