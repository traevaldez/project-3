import React from 'react';
import commentList from '../components/commentList';
import commentForm from '../components/commentForm';
import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_comments, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_comments);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const comments = data?.comments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <commentForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <commentList
              comments={comments}
              title="Comment for the moment"
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
