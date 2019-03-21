const { GraphQLServer } = require("graphql-yoga");
const port = 4000;

// 1
const typeDefs = `
type Query {
  info: String!
}
`;

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:${port}`));
