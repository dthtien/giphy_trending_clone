import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const Loader = ({ spin, onClick }) => (
  <div className="spinner">
    {spin ? (
      <Icon type="sync" spin={spin} />
    ) : (
      <Icon type="sync" onClick={onClick} />
    )}
  </div>
);

Loader.propTypes = {
  spin: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(Loader);
