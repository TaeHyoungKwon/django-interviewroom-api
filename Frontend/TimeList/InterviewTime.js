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
      <TouchableOpacity
        onPress={() => {
          Actions.detail({
            curTime: this.props.curTime,
            startTime: this.f_startTime,
            endTime: this.f_endTime,
            interviewee: this.props.interviewee,
            room: this.props.room
          });
        }}
      >
        <View
          style={
            this.state.isSelected ? styles.selectedContents : styles.contents
          }
        >
          <View style={[styles.timeBox]}>
            <Text style={[styles.startTimeText]}>{f_startTime}</Text>
            <Text
              style={[
                {
                  fontSize: 20,
                  color: 'white'
                }
              ]}
            >
              {' '}
              ~{' '}
            </Text>
            <Text style={[styles.endTimeText]}>{f_endTime}</Text>
          </View>

          <View
            style={
              this.state.isSelected ? styles.isSelected : styles.isNotSelected
            }
          />
          <View style={[styles.intervieweeList]}>
            <View>
              <Text style={[styles.intervieweeListTop]}>면접자</Text>
            </View>
            <Text style={[styles.intervieweeText]}>
              {this.props.interviewee}
            </Text>
          </View>

          {this.state.isSelected ? (
            <View style={[styles.isSelectedBall]}>
              <Text style={styles.isSelectedBallText}>●</Text>
            </View>
          ) : (
            <View style={[styles.isSelectedBall]}>
              <Text style={styles.isNotSelectedBallText}> </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 10,
    //backgroundColor:'yellow'
    borderTopWidth: 8,
    borderLeftWidth: 3,
    borderRadius: 20,
    borderColor: '#fff'
  },

  selectedContents: {
    width: deviceWidth - 80,
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    //backgroundColor:'yellow'
    borderTopWidth: 8,
    borderLeftWidth: 3,
    borderRadius: 20,
    borderColor: '#ff5000'
  },

  timeBox: {
    flex: 1.5,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  isNotSelected: {
    flex: 0.1,
    backgroundColor: '#98ff98',
    width: 20,
    height: 120
  },

  isSelected: {
    flex: 0.1,
    backgroundColor: '#ff5000',
    width: 20,
    height: 120
  },

  intervieweeList: {
    flex: 5,
    //backgroundColor: 'green',
    height: 120,
    marginLeft: 20,
    marginTop: 20
  },

  intervieweeListTop: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20
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
