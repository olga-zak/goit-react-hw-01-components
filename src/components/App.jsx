// eslint-disable-next-line
import styles from './Common.module.css';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendsList friends={friends} />
    </>

    // <div
    //   // style={{
    //   //   height: '100vh',
    //   //   display: 'flex',
    //   //   justifyContent: 'center',
    //   //   alignItems: 'center',
    //   //   fontSize: 40,
    //   //   color: '#010101'
    //   // }}
    // >
    //   {/* React homework template */}
    //   <Profile/>
    // </div>
  );
};
