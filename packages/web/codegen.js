const DEPENDENCY_IMPORT_FROM = '@apollo/client';

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
        gqlImport: `${DEPENDENCY_IMPORT_FROM}#gql`,
        apolloReactCommonImportFrom: DEPENDENCY_IMPORT_FROM,
        apolloReactHooksImportFrom: DEPENDENCY_IMPORT_FROM,
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
