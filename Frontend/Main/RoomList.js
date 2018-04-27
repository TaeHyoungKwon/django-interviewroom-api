import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import Actions from 'react-native-router-flux';

import InterviewRoom from './InterviewRoom'

export default class RoomList extends React.Component {
    
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
        console.log("RoomList")
        return fetch('http://10.2.236.67:8000/api/room_list')
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
            const { pk, name } = data;
            console.log(pk);
            console.log(name);
      
            return (
                <InterviewRoom
                  key={pk}
                  name={name}
                />
            );
          })

        return (
            <View style={[styles.container]}>
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
        backgroundColor: '#fff'
    }
})