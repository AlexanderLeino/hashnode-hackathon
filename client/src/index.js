import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
  ApolloClient, 
  InMemoryCache, 
  ApolloProivder,
} from '@apollo/client';


const client = new ApolloClient({
  uri: 'graphql',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProivder client={client}>
    <App />
  </ApolloProivder>,
  document.getElementById('root')
);
