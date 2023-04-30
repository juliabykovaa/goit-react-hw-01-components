import user from './../../data/user.json';
import stats from './../../data/data.json';
import friendList from './../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />;
      <FriendList friends={friendList} />;
      <TransactionHistory transactions={transactions} />;
    </>
  );
}
