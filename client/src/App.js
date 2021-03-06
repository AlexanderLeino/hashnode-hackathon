import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
//import SidebarCategories from './components/SidebarCategories'
// import QHome from './pages/QHome'
import Login from './components/Login'
import EditProfile from './components/EditProfile'
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import QMakeGroup from "./components/QMakeGroup";
import GroupPage from "./pages/GroupPage";


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/edit' element={<EditProfile />}></Route>
        <Route path="/signUp" element={<SignUpPage/>}></Route>
        <Route path='/makeGroup' element={<QMakeGroup />}></Route>
        <Route path="group" element={<GroupPage />}></Route>
      </Routes>
    </Router>  
    </ApolloProvider>
  );
}

export default App;
