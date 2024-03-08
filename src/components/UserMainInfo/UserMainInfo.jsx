import css from './UserMainInfo.module.css';

const UserMainInfo = ({ name, tag, location, image }) => {
  return (
    <div className={css.container}>
      <img
        src={image}
        alt="User avatar"
        className={css.img}
        width="200"
        height="200"
      />
      <p className={css.name}>{name}</p>
      <p className={css.tagAndLocation}>@{tag}</p>
      <p className={css.tagAndLocation}>{location}</p>
    </div>
  );
};

export default UserMainInfo;
