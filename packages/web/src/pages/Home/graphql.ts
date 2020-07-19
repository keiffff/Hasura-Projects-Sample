import { gql } from '@apollo/client';

export const NOTIFY_NEW_POSTS = gql`
  subscription notifyNewPosts($userId: String!) {
    posts(order_by: { created_at: desc }, limit: 10, where: { user_id: { _eq: $userId } }) {
      id
      image
      caption
      created_at
      likes {
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
