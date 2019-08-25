import React, { memo } from 'react';
import { Icon } from 'antd';

const Loader = () => (
  <div className="spinner">
    <Icon type="sync" spin />
  </div>
);

export default memo(Loader);
