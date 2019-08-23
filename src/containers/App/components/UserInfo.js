/* eslint-disable camelcase */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

const UserInfo = ({ user: { profile_url, avatar_url, display_name } }) => (
  <a
    className="userInfor"
    target="_blank"
    href={profile_url}
    rel="noopener noreferrer"
  >
    <Avatar src={avatar_url} className="avatarImage" />
    <span>{display_name}</span>
  </a>
);

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default memo(UserInfo);
