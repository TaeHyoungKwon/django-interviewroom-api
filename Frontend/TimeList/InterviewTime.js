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
    timeSelected: false,
    inRange: false
  };

  componentDidMount() {}

  componentWillMount() {}

  render() {
    var f_startTime = this.props.fullStartTime;
    var f_endTime = this.props.fullEndTime;

    var now = new Date();
    var start = new Date(f_startTime);
    var end = new Date(f_endTime);

    start.setHours(start.getHours() - 9);
    end.setHours(end.getHours() - 9);

    console.log(now);
    console.log(start);
    console.log(end);

    console.log(start <= now);
    console.log(now < end);

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
    nowHours = now.getHours();
    nowMinutes = now.getMinutes();

    if (Number(nowHours) < 10) {
      var formattedNow = '0' + nowHours + ':' + nowMinutes;
    } else {
      var formattedNow = nowHours + ':' + nowMinutes;
    }

    console.log('111111111');
    console.log(formattedNow);
    console.log(this.props.startTime);
    console.log(this.props.endTime);

    console.log(
      this.props.startTime <= formattedNow && formattedNow < this.props.endTime
    );
    console.log('111111111');

    if (
      this.props.startTime <= formattedNow &&
      formattedNow < this.props.endTime
    ) {
      this.intervalCheck = setInterval(
        () => this.setState({ timeSelected: true }),
        60000
      );
    } else {
      if (this.state.timeSelected == true) {
        this.setState({ timeSelected: false });
      }
    }

    // var new_start = new Date(start.getTime() + 30 * 60000);

    // if (start <= now && now <= new_start && now.getMinutes()) {
    //   this.intervalCheck = setInterval(
    //     () => this.setState({ timeSelected: true }),
    //     100000
    //   );
    // } else {
    //   if (this.state.timeSelected == true) {
    //     this.setState({ timeSelected: false });
    //   }
    // }
    return (
      <View style={styles.contents}>
        <View
          style={this.state.isSelected ? styles.coloredTimeBox : styles.timeBox}
        >
          <Text style={[styles.startTimeText]}>
            {this.props.startTime} ~ {this.props.endTime}{' '}
          </Text>
        </View>

        <View style={[styles.intervieweeBox]}>
          <Text style={[styles.intervieweeText]}>{this.props.interviewee}</Text>
        </View>
        {this.state.timeSelected ? (
          <View style={[styles.isSelectedBall]}>
            <Text style={styles.isSelectedBallText}>●</Text>
          </View>
        ) : null}
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
  coloredTimeBox: {
    flex: 2,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
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
