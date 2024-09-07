import React from 'react';
import userData from '../data/userData.json';
import friendsData from '../data/friendsData.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';

function App() {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <React.Fragment>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </React.Fragment>
  );
}

export default App;
