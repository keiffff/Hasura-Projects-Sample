module.exports = {
  schema: [
    {
      'https://insta-clone-sample.herokuapp.com/v1/graphql': {
        headers: {
          Authorization: `Bearer${process.env.AUTH_TOKEN}`,
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
