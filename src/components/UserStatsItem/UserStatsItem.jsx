const UserStatsItem = ({ name, number }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};

export default UserStatsItem;
