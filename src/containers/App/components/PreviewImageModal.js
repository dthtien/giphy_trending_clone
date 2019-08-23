import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const PreviewImageModal = ({ visible, onClose }) => (
  <div>
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </div>
);

PreviewImageModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewImageModal;
