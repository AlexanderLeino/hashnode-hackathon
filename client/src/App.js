import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SidebarCategories from './components/SidebarCategories'
import QHome from './pages/QHome'

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path='/' element={<QHome />}>

        </Route>
      </Routes>
    </Router>
      <SidebarCategories />
      
    </ApolloProvider>
  );
}

export default App;
