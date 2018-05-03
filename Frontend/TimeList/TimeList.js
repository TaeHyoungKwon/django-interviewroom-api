import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import Actions from 'react-native-router-flux';

import InterviewTime from './InterviewTime';

export default class TimeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      times: [
        {
          index: 0,
          p_start_time: '09:00',
          p_end_time: '09:30'
        },
        {
          index: 1,
          p_start_time: '09:30',
          p_end_time: '10:00'
        },
        {
          index: 2,
          p_start_time: '10:00',
          p_end_time: '10:30'
        },
        {
          index: 3,
          p_start_time: '10:30',
          p_end_time: '11:00'
        },
        {
          index: 4,
          p_start_time: '11:00',
          p_end_time: '11:30'
        },
        {
          index: 5,
          p_start_time: '11:30',
          p_end_time: '12:00'
        },
        {
          index: 6,
          p_start_time: '12:00',
          p_end_time: '12:30'
        },
        {
          index: 7,
          p_start_time: '12:30',
          p_end_time: '13:00'
        },
        {
          index: 8,
          p_start_time: '13:00',
          p_end_time: '13:30'
        },
        {
          index: 9,
          p_start_time: '13:30',
          p_end_time: '14:00'
        },
        {
          index: 10,
          p_start_time: '14:00',
          p_end_time: '14:30'
        },
        {
          index: 11,
          p_start_time: '14:30',
          p_end_time: '15:00'
        },
        {
          index: 12,
          p_start_time: '15:00',
          p_end_time: '15:30'
        },
        {
          index: 13,
          p_start_time: '15:30',
          p_end_time: '16:00'
        },
        {
          index: 14,
          p_start_time: '16:00',
          p_end_time: '16:30'
        },
        {
          index: 15,
          p_start_time: '16:30',
          p_end_time: '17:00'
        },
        {
          index: 16,
          p_start_time: '17:00',
          p_end_time: '17:30'
        },
        {
          index: 17,
          p_start_time: '17:30',
          p_end_time: '18:00'
        },
        {
          index: 18,
          p_start_time: '02:00',
          p_end_time: '02:30'
        },
        {
          index: 19,
          p_start_time: '02:30',
          p_end_time: '03:00'
        }
      ],
      isIndicator: true
    };
  }

  componentDidMount() {
    this.getListData();
  }

  getListData() {
    return fetch('http://10.2.236.67:8001/api/time_list/' + this.props.pk)
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
    let lists = this.state.times.map((times, index) => {
      let {
        p_start_time,
        p_end_time,
        p_interviewee,
        fullStartTime,
        fullEndTime
      } = times;

      this.state.datas.map((data, index) => {
        let { start_time, end_time, interviewee } = data;

        let new_start_time = start_time.split('T')[1].slice(0, 5);
        let new_end_time = end_time.split('T')[1].slice(0, 5);

        if (p_start_time == new_start_time || p_end_time == new_end_time) {
          console.log('-----------');
          console.log(p_start_time);
          console.log(p_end_time);
          console.log('-----------');
          p_interviewee = interviewee;
          fullStartTime = start_time;
          fullEndTime = end_time;
        }
      });

      return (
        <InterviewTime
          startTime={p_start_time}
          endTime={p_end_time}
          interviewee={p_interviewee}
          name={this.props.name}
          fullStartTime={fullStartTime}
          fullEndTime={fullEndTime}
        />
      );
    });

    // let lists = this.state.datas.map((data, index) => {
    //   const { room, start_time, end_time, interviewee} = data;

    //   return (
    //     <InterviewTime
    //       startTime={start_time}
    //       endTime={end_time}
    //       interviewee={interviewee}
    //       name={this.props.name}
    //     />
    //   );
    // });

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
