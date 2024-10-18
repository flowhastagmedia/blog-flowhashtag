import { ApolloClient, InMemoryCache } from "@apollo/client";

// Load environment variables from .env file

const client = new ApolloClient({
  uri:
    "https://graphql.contentful.com/content/v1/spaces/" +
    process.env.CONTENTFUL_SPACE_ID,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export default client;
