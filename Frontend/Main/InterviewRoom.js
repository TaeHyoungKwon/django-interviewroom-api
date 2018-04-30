import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';

import { Actions } from 'react-native-router-flux';

class InterviewRoom extends React.Component {
  render() {
    console.log('kwontaehyoung');
    console.log(this.props.name);
    console.log(this.props.pk);

    return (
      <View style={[styles.container]}>
        <Button
          style={[styles.roomButton]}
          rounded
          onPress={() => {
            Actions.timeList({ pk: this.props.pk, name: this.props.name });
          }}
        >
          <Text style={[styles.buttonText]}>{this.props.name} </Text>
        </Button>
      </View>
    );
  }
}

export default InterviewRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17273d'
  },
  roomButton: {
    width: 600,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff5000'
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 40,
    alignItems: 'center'
  }
});
