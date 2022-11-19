export const FriendsListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => {
        return (
          <li className="item" key={friend.id}>
            {/* В зависимости от пропа isOnline, должен меняться цвет фона
            span.status. Это можно сделать через разный CSS-класс или Styled
            Components. */}
            <span className="status">{friend.isOnline}status</span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </>
  );
};
