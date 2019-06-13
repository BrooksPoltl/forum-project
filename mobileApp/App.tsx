import React from 'react';
import {Text} from 'react-native'
import {NativeRouter, Link} from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

import {HomePage} from './components/homepage'
import {SignUp} from './components/SignUp/signup'
import {Login} from './components/login'

const client = new ApolloClient({
  uri: "https://symposium-forum-project.herokuapp.com/graphql"
})


export default class App extends React.Component{
  render(){
    return (
      <ApolloProvider client = {client}>
        <NativeRouter>
          <Navigation>
          <Card
            exact
            path = "/"
            render ={()=>(
                <HomePage/>
            )}/>
          <Card 
            path ="/login"
            render = {()=><Login />}
            />
          <Card 
            path ="/signup"
            render = {()=>
            <SignUp/>
          }
            />
          <Card 
            path ="/timeline"
            render = {()=>
            <Text>Timeline</Text>
          }
            />
          </Navigation>
        </NativeRouter>
      </ApolloProvider>
    );
  }
}

