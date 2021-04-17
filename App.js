import * as React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './screens/SigningIn'

export default class App extends React.Component {
  render(){
         return (
          <View>
              <WelcomeScreen/>
          </View>
          );
  }
}