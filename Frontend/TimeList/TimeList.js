import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Actions from 'react-native-router-flux';

import InterviewTime from './InterviewTime'

export default class TimeList extends React.Component {

  constructor(props) {
    super(props);

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var resultTime = year + "년 " + month + "월 " + date + "일 " + hours + "시 " + minutes + "분"

    this.state = {
      datas: [],
      isIndicator: true,
      curTime: resultTime
    };
  }


  componentDidMount() {
    this.getListData()

    this.intervalID = setInterval(
      () => this.tick(),
      60000
    );
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

    var resultTime = year + "년 " + month + "월 " + date + "일 " + hours + "시 " + minutes + "분"

    this.setState({
      curTime: resultTime
    });
  }


  getListData() {
    console.log("TimeList")
    console.log(this.props.pk)


    return fetch('http://10.2.30.134:8001/api/time_list/' + this.props.pk)
      .then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);

        this.setState({
          datas: responseJson,
        });

        return responseJson;

      }).catch((error) => {
        console.error(error);
      });
  }



  render() {


    
    let lists = this.state.datas.map((data, index) => {
      const {
        room,
        start_time,
        end_time,
        interviewee,
        interviewer,
        pk } = data;


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
        />
      );
    })

    return (
      <View style={[styles.container]}>

        <View style={[styles.time]}>
          <Text style={[styles.timeText]}>
            {this.state.curTime}
          </Text>
        </View>

        <View style={[styles.roomTitle]}>
          <Text style={[styles.roomTitleText]}>
            {this.props.name}
          </Text>
        </View>

        <ScrollView style={styles.scroll} >
          {lists}
        </ScrollView>
      </View>

    )
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
    width: "100%",
    
    paddingTop: 50,
    paddingBottom: 50,
  },
  roomTitleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },
  time: {
    alignItems: 'center',
    width: "100%",
    paddingTop: 50,
  },
  timeText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white"
  },
})