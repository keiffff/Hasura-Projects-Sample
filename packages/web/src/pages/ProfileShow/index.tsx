import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalHeader } from 'components/GlobalHeader';
import { useAuth } from 'providers/Auth';
import { useGetProfileInfoQuery, useGetFollowInfoQuery } from 'types/graphql';
import { LoadingScreen } from 'components/LoadingScreen';

const ProfileShow = () => {
  const { id: userId } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const { loading: getProfileInfoLoading, data: getProfileInfoData } = useGetProfileInfoQuery({
    variables: { id: userId },
  });
  const { loading: getFollowInfoLoading, data: getFollowInfoData } = useGetFollowInfoQuery({
    variables: { followingId: currentUser.sub, followerId: userId },
  });

  return (
    <>
      <GlobalHeader pageTitle="Profile" />
      {getProfileInfoLoading || getFollowInfoLoading ? (
        <LoadingScreen />
      ) : (
        <pre>
          <code>{JSON.stringify({ getProfileInfoData, getFollowInfoData }, null, 2)}</code>
        </pre>
      )}
    </>
  );
};

export default ProfileShow;
