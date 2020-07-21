module.exports = {
  schema: [
    {
      [`${process.env.HASURA_GRAPHQL_ENDPOINT}`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: './src/**/graphql.ts',
  overwrite: true,
  generates: {
    './src/types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        namingConvention: {
          transformUnderscore: true,
        },
        reactApolloVersion: 3,
        gqlImport: '@apollo/client#gql',
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
