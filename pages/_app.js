import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import '../styles/globals.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import 'moment/locale/de';
import { Layout } from 'antd';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import FeatureImage from '../components/FeatureImage';
function MyApp({ Component, pageProps }) {
  const { Header, Footer, Sider, Content } = Layout;

  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_CMS_URL}/graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${'5d808bfc89170d0f731237859337a1dc8fd9ed225106851ce418701c26fd23ed00e80558024d659034726e41bf8b4ce6561987d31636473abb0897cbc08c15945c84c3d04497120530c54aba92b4d096861557a311cade9f9e4092942de0d3b254eeb4cb4c5e7bbe8ffcf0845732bfda51d7e41379380499981c25a6302dcd25'}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 10, width: '100%' }}>
        <HeaderComponent />
      </Header>
        <ApolloProvider client={client}>
          <div className="general-padding">
            <Component {...pageProps} />
          </div>
        </ApolloProvider>
      <Footer>
        <FooterComponent />
      </Footer>
    </Layout>

  )

}

export default MyApp
