import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadImages, makeSelectImages } from './services';
import { getUnique } from '../../utils';

function withInfiniteScroll(WrappedComponent) {
  class WithInfiniteScroll extends Component {
    constructor(props) {
      super(props);
      this.state = {
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
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      const windowHeight =
        'innerHeight' in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const { body } = document;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const windowBottom = windowHeight + window.pageYOffset;

      if (windowBottom >= docHeight) {
        this.handleLoadMore();
      }
    };

    handleLoadMore = () => {
      this.props.loadImages();
    };

    render() {
      const {
        images: { loading },
      } = this.props;
      const { images } = this.state;

      return <WrappedComponent images={images} loading={loading} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    loadImages: bindActionCreators(loadImages, dispatch),
  });

  const mapStateToProps = createStructuredSelector({
    images: makeSelectImages(),
  });

  WithInfiniteScroll.propTypes = {
    loadImages: PropTypes.func.isRequired,
    images: PropTypes.object.isRequired,
  };

  WithInfiniteScroll.displayName = `WithInfiniteScroll(${getDisplayName(
    WrappedComponent,
  )})`;

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithInfiniteScroll);
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withInfiniteScroll;
