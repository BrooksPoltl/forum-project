import React from 'react';
import {Text} from 'react-native'
import {NativeRouter, Link} from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'

import {HomePage} from './components/homepage'
import {SignUp} from './components/SignUp/signup'


export default class App extends React.Component{
  render(){
    return (
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
            render = {()=><Text>Login</Text>}
            />
          <Card 
            path ="/signup"
            render = {()=>
            <SignUp/>
          }
            />
        </Navigation>
      </NativeRouter>
    );
  }
}

