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
        this.state = {
          datas: [],
          isIndicator: true
        };
      }


    componentDidMount() {
        this.getListData()
    }


    getListData() {
        console.log("TimeList")
        console.log(this.props.pk)
        
        
        return fetch('http://10.2.236.67:8000/api/time_list/' + this.props.pk)
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

            console.log(room);
            console.log(start_time);
            console.log(end_time);
            console.log(interviewee);
            console.log(interviewer);
      
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
        alignItems:'center',
        width:"100%",
        height: 200,
        paddingTop:80,
        paddingBottom:80,
        color:"white"
        

    },
    roomTitleText: {
        fontSize:50,
        fontWeight:"bold",
        color:"white"
        
    },
})