import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        );
      })}
    </ul>
  );
};
