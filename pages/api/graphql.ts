import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    users: [User!]!
    hello(name: String): String!
  }
  type User {
    name: String
  }
`

const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    users(parent, args, context) {
      return [{ name: 'Nextjs' }]
    },
    async hello(_, { name }) {
      return `Hello ${name || 'World'}`
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
