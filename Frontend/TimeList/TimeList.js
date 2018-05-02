import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import Actions from 'react-native-router-flux';

import InterviewTime from './InterviewTime';

export default class TimeList extends React.Component {
  constructor(props) {
    super(props);

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var resultTime =
      year +
      '년 ' +
      month +
      '월 ' +
      date +
      '일 ' +
      hours +
      '시 ' +
      minutes +
      '분';

    this.state = {
      datas: [],
      times: [
        '09:00~09:30',
        '09:30~10:00',
        '10:00~10:30',
        '10:30~11:00',
        '11:00~11:30',
        '11:30~12:00',
        '12:00~12:30',
        '12:30~13:00'
      ],
      isIndicator: true,
      curTime: resultTime
    };
  }

  componentDidMount() {
    this.getListData();

    this.intervalID = setInterval(() => this.tick(), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var resultTime =
      year +
      '년 ' +
      month +
      '월 ' +
      date +
      '일 ' +
      hours +
      '시 ' +
      minutes +
      '분';

    this.setState({
      curTime: resultTime
    });
  }

  getListData() {
    console.log('TimeList');
    console.log(this.props.pk);

    return fetch('http://192.168.1.68:8001/api/time_list/' + this.props.pk)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        this.setState({
          datas: responseJson
        });

        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.datas);
    let lists = this.state.datas.map((data, index) => {
      const { room, start_time, end_time, interviewee, interviewer, pk } = data;

      return (
        <InterviewTime
          key={pk}
          pk={pk}
          room={room}
          startTime={start_time}
          endTime={end_time}
          interviewee={interviewee}
          interviewer={interviewer}
          name={this.props.name}
          curTime={this.state.curTime}
        />
      );
    });

    return (
      <View style={[styles.container]}>
        <View style={[styles.roomTitle]}>
          <Text style={[styles.roomTitleText]}>{this.props.name}</Text>
        </View>

        <View style={styles.scroll}>
          <ScrollView>{lists}</ScrollView>
        </View>

        <View style={styles.bottom}>
          <Image
            style={styles.bottomImage}
            source={require('../images/smilegate_mark.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17273d'
  },

  roomTitle: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#17273d',
    paddingTop: 10,
    paddingBottom: 10
  },

  roomTitleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },

  scroll: {
    flex: 5,
    paddingTop: 10,
    paddingBottom: 10
  },

  time: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 50
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  bottom: {
    flex: 0.8,
    justifyContent: 'flex-end',
    paddingBottom: 30
  }
});
