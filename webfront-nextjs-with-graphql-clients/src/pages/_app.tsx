import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { createClient, Provider } from 'urql';

const apolloClient = new ApolloClient({
  uri: 'http://127.0.0.1:3001/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          tasks: relayStylePagination(),
        },
      },
    },
  })
});

const urqlClient = createClient({
  url: 'http://127.0.0.1:3001/graphql',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider value={urqlClient}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
