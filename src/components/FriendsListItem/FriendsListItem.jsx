import PropTypes from 'prop-types';

import { Item } from './FriendsListItem.styled';
import { Name } from './FriendsListItem.styled';
import { Avatar } from './FriendsListItem.styled';
import { OnlineStatus } from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <OnlineStatus online={isOnline}></OnlineStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
