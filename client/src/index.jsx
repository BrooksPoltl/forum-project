import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import  { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';

const httpLink = createHttpLink({
    uri: "https://symposium-forum-project.herokuapp.com/graphql"
});

const authLink = setContext((_, { headers })=>{
    const token = localStorage.getItem('authorization');
    return{
        headers:{
            ...headers,
            authorization: token? `${token}`:"",
        }
    }
})
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <Router>
        <ApolloProvider client = {client}>
            <App />
        </ApolloProvider>
    </Router>,
    document.getElementById('root'));

