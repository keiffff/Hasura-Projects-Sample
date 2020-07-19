import React from 'react';
import { GlobalHeader } from 'components/GlobalHeader';
import { useNotifyNewPostsSubscription } from 'types/graphql';
import { useAuth } from 'providers/Auth';
import { LoadingScreen } from 'components/LoadingScreen';

const Home = () => {
  const { currentUser } = useAuth();
  const { loading, data: notifyNewPostsSubscriptionData } = useNotifyNewPostsSubscription({
    variables: { userId: currentUser.sub },
  });

  return (
    <>
      <GlobalHeader pageTitle="Home" userId={currentUser.sub} />
      {loading ? (
        <LoadingScreen />
      ) : (
        <pre>
          <code>{JSON.stringify({ notifyNewPostsSubscriptionData }, null, 2)}</code>
        </pre>
      )}
    </>
  );
};

export default Home;
