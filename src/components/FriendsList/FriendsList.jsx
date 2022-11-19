import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendsList = ({ friends }) => {
  //console.log(...friends);
  return (
    <>
      <ul className="friend-list">
        <FriendsListItem friends={friends} />
        {/* <FriendsListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
          id={friends.id}
        /> */}
      </ul>
    </>
  );
};
