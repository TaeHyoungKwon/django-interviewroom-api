import React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Container, Header, Content,Button } from 'native-base';

import {Actions} from 'react-native-router-flux'

class InterviewTime extends React.Component {
    render() {
        console.log("kwontaehyoung")
        console.log(this.props.name);
        

        return (
            <View style={[styles.container]}>

                
                <Text style={{fontSize:40, color:'black', alignItems: 'center'}}>
                    {this.props.startTime}            
                </Text>

                <Text style={{fontSize:40, color:'black', alignItems: 'center'}}>
                    {this.props.endTime}            
                </Text>

                <Text style={{fontSize:40, color:'black', alignItems: 'center'}}>
                    {this.props.interviewee}            
                </Text>

                <Text style={{fontSize:40, color:'black', alignItems: 'center'}}>
                    {this.props.interviewer}            
                </Text>


                {/* <Button title={this.props.name} />                 */}
             
                    
            </View>

        )
    }
}

export default InterviewTime;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});