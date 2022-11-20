import PropTypes from 'prop-types';

import { Item } from './FriendsListItem.styled';
import { Name } from './FriendsListItem.styled';
import { Avatar } from './FriendsListItem.styled';
import { Online } from './FriendsListItem.styled';
import { Offline } from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline === true ? <Online></Online> : <Offline></Offline>}
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
