import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Button } from 'native-base';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

import { Actions } from 'react-native-router-flux';

class InterviewTime extends React.Component {
  state = {
    isSelected: false,
    inRange: false
  };

  componentDidMount() {}

  componentWillMount() {}

  render() {
    var f_startTime = this.props.startTime.slice(11, 16);
    var f_endTime = this.props.endTime.slice(11, 16);

    var now = new Date();
    var start = new Date(this.props.startTime);
    var end = new Date(this.props.endTime);

    if (start <= now && now < end) {
      this.intervalCheck = setInterval(
        () => this.setState({ isSelected: true }),
        60000
      );
    } else {
      if (this.state.isSelected == true) {
        this.setState({ isSelected: false });
      }
    }
    return (
      <View style={styles.contents}>
        <View style={[styles.timeBox]}>
          <Text style={[styles.startTimeText]}>09:00 ~ 09:30</Text>
        </View>

        <View style={[styles.intervieweeBox]}>
          <Text style={[styles.intervieweeText]}>권태형 님</Text>
        </View>
      </View>
    );
  }
}

export default InterviewTime;

const styles = StyleSheet.create({
  contents: {
    width: deviceWidth - 80,
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,

    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: '#D1D2DE'
    //backgroundColor: '#FFFFFF'
    //backgroundColor:'yellow'

    // borderBottomWidth: 5,
    // borderStyle: 'dotted',
    // // borderRadius: 5,
    // // borderTopWidth: 1,
    // // borderLeftWidth: 1,

    // borderRightWidth: 1,

    // borderColor: '#fff'
  },

  timeBox: {
    flex: 2,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  intervieweeBox: {
    flex: 4
  },

  isNotSelected: {
    flex: 0.1,
    backgroundColor: '#98ff98',
    width: 10
  },

  isSelected: {
    flex: 0.1,
    backgroundColor: '#ff5000',
    width: 20
  },

  intervieweeList: {
    flex: 5,
    //backgroundColor: 'green',
    marginLeft: 20,
    marginTop: 20
  },

  intervieweeListTop: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10
  },

  intervieweeText: {
    fontSize: 25,
    color: 'white'
  },

  intervieweeText2: {
    fontSize: 15,
    color: 'gray'
  },

  startTimeText: {
    fontSize: 30,
    color: 'white'
  },

  endTimeText: {
    fontSize: 30,
    color: 'white'
  },

  isSelectedBall: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  isSelectedBallText: {
    fontSize: 80,
    color: '#ff5000'
  },

  isNotSelectedBallText: {
    fontSize: 80,
    color: '#98ff98'
  }
});
