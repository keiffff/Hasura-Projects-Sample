import { gql } from '@apollo/client';

export const NOTIFY_NEW_POSTS = gql`
  subscription notifyNewPosts($userId: String!) {
    posts(
      order_by: { created_at: desc }
      limit: 10
      where: {
        _or: [
          { user: { followsByFollowerId: { following_id: { _eq: $userId } } } }
          { user_id: { _eq: $userId } }
        ]
      }
    ) {
      id
      image
      caption
      created_at
      likes(where: { user_id: { _eq: $userId } }) {
        id
      }
      user {
        id
        avatar
        name
      }
      comments {
        id
        user {
          name
        }
        comment
      }
    }
  }
`;

export const INSERT_POST = gql`
  mutation insertPost($image: String!, $caption: String!, $userId: String!) {
    insert_posts(objects: { image: $image, caption: $caption, user_id: $userId }) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: Int!) {
    delete_posts(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_LIKE = gql`
  mutation insertLike($postId: Int!, $userId: String!) {
    insert_likes(objects: { post_id: $postId, user_id: $userId }) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_LIKE = gql`
  mutation deleteLike($postId: Int!, $userId: String!) {
    delete_likes(where: { post_id: { _eq: $postId }, user_id: { _eq: $userId } }) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_FOLLOW = gql`
  mutation insertFollow($followerId: String!, $followingId: String!) {
    insert_follow(objects: { follower_id: $followerId, following_id: $followingId }) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_FOLLOW = gql`
  mutation deleteFollow($followerId: String!, $followingId: String!) {
    delete_follow(
      where: { follower_id: { _eq: $followerId }, following_id: { _eq: $followingId } }
    ) {
      returning {
        id
      }
    }
  }
`;

export const GET_UNFOLLOWING_USERS = gql`
  query getUnfollowingUsers($id: String!) {
    users(where: { followsByFollowingId: { _not: { following_id: { _eq: $id } } } }, limit: 20) {
      id
      avatar
      name
    }
  }
`;
