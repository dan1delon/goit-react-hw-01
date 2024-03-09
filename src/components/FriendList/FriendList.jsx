import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = friends => {
  return (
    <ul>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} isOnline={isOnline} name={name} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
