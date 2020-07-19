import { gql } from '@apollo/client';

export const GET_PROFILE_INFO = gql`
  query getProfileInfo($id: String!) {
    users(where: { id: { _eq: $id } }) {
      name
      avatar
      description
      posts(order_by: { created_at: desc }) {
        id
        image
      }
    }
  }
`;

export const GET_FOLLOW_INFO = gql`
  query getFollowInfo($followingId: String!, $followerId: String!) {
    follow(where: { following_id: { _eq: $followingId }, follower_id: { _eq: $followerId } }) {
      id
    }
    followingCount: follow_aggregate(where: { following_id: { _eq: $followerId } }) {
      aggregate {
        count
      }
    }
    followersCount: follow_aggregate(where: { follower_id: { _eq: $followerId } }) {
      aggregate {
        count
      }
    }
  }
`;
