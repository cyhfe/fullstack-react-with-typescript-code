need to write about creating the `d.ts` files

import apollo client without curly braces otherwise there will be an error

Error: 
        In order to initialize Apollo Client, you must specify link & cache properties on the config object.
        This is part of the required upgrade when migrating from Apollo Client 1.0 to Apollo Client 2.0.
        For more information, please visit:
          https://www.apollographql.com/docs/react/basics/setup.html
        to help you get started.


yarn run apollo schema:download --header="Authorization: Bearer c55448233ba17de366e633fb59a39733dcb3536f" --endpoint=https://api.github.com/graphql graphql-schema.json

yarn run apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types