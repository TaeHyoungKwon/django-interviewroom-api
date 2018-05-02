import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Dimensions } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';

import { Actions } from 'react-native-router-flux';
const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

class InterviewRoom extends React.Component {
  render() {
    console.log('kwontaehyoung');
    console.log(this.props.name);
    console.log(this.props.pk);

    return (
      <View style={[styles.container]}>
        <Button
          style={[styles.roomButton]}
          full
          onPress={() => {
            Actions.timeList({ pk: this.props.pk, name: this.props.name });
          }}
        >
          <Text style={[styles.buttonText]}>{this.props.name} </Text>
          <Text style={styles.buttonNextText}>{'      >'}</Text>
        </Button>
      </View>
    );
  }
}

export default InterviewRoom;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#C0C0C0'
  },
  roomButton: {
    width: deviceWidth,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17273d',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  buttonNextText: {
    fontSize: 80,
    color: '#fff'
    //fontWeight: 'bold'
  }
});
