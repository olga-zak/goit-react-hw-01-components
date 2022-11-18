import PropTypes from 'prop-types';
import styles from './Profile.module.css';

//как поставить запятые в styles.quantity? 5603 -> 5,603

export const Profile = ({ username, tag, location, avatar, stats }) => {
  // const { username, tag, location, avatar, stats } = props; //деструктуризация
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  // stats: PropTypes.object,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
