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
    <span>{display_name.substring(0, 40)}</span>
  </a>
);

UserInfo.propTypes = {
  user: PropTypes.object,
};

UserInfo.defaultProps = {
  user: {
    profile_url: 'https://giphy.com',
    display_name: 'Giphy',
    avatar_url: 'https://media.giphy.com/avatars/default5.gif',
  },
};

export default memo(UserInfo);
