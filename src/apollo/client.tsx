import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
});

const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
});

export default client;
