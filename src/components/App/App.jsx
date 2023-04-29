import user from './../../data/user.json';
import stats from './../../data/data.json'
import { Profile } from '../Profile/Profile'
import { Statistics } from '../Statistics/Statistics'


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

      <Statistics title="Upload stats" stats={stats} />

    </>
  );
}

