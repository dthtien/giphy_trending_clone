import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { ImageLoader } from '../../../components';

const PreviewImageModal = ({ visible, onClose, src }) => (
  <div>
    <Modal
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
      className="previewImageModal"
    >
      <ImageLoader src={src} alt="original image" />
    </Modal>
  </div>
);

PreviewImageModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default PreviewImageModal;
