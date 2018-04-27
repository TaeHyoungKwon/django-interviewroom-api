import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView
} from 'react-native';


import { Stack,Router, Scene } from 'react-native-router-flux'

import RoomList from './Main/RoomList'
import TimeList from './TimeList/TimeList'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{


  render() {

    return (

      <Router uriPrefix={'localhost:8080/api'}>

        <Scene key="root">

        <Scene
            key="roomList"
            component={RoomList}
            title="면접실 리스트"
            hideNavBar={true}
            initial={true} />

          <Scene
            key="timeList"
            component={TimeList}
            title="시간 별 리스트"/>

        </Scene>
      </Router>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
