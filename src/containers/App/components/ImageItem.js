import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import UserInfo from './UserInfo';
import { ImageLoader } from '../../../components';

const ImageItem = ({ image, onClick }) => (
  <Col
    key={image.id}
    xs={{ span: 12 }}
    sm={{ span: 8 }}
    lg={{ span: 6 }}
    className="imageContent"
  >
    <ImageLoader
      className="responsive"
      src={image.images.fixed_height_small_still.url}
      alt={image.title}
      onClick={onClick}
    />
    {image.user && <UserInfo user={image.user} />}
  </Col>
);

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired,
};

export default memo(ImageItem);
