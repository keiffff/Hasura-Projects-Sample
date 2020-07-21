function syncUserWithHasura(user, context, callback) {
  const upsertUserQuery = `
    mutation($userId: String!, $name: String!, $email: String!, $avatar: String!){
      insert_users(objects: [{
        id: $userId,
        name: $name,
        email: $email,
        avatar: $avatar
      }], on_conflict: { constraint: users_pkey, update_columns: [] }) {
        affected_rows
      }
    }`;

  request.post(
    {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": configuration.HASURA_GRAPHQL_ADMIN_SECRET,
      },
      url: configuration.HASURA_GRAPHQL_ENDPOINT,
      body: JSON.stringify({
        query: upsertUserQuery,
        variables: {
          userId: user.user_id,
          name: user.name,
          email: user.email,
          avatar: user.picture,
        },
      }),
    },
    () => {
      callback(null, user, context);
    }
  );
}
