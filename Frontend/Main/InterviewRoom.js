import React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Container, Header, Content,Button } from 'native-base';

import {Actions} from 'react-native-router-flux'

class InterviewRoom extends React.Component {
    render() {
        console.log("kwontaehyoung")
        console.log(this.props.name);
        console.log(this.props.pk)
        

        return (
            <View style={[styles.container]}>
                <Text style={{fontSize:40, color:'black', alignItems: 'center'}}>{this.props.name}</Text>
                {/* <Button title={this.props.name} />                 */}
                <Button rounded warning onPress={() => {
                    Actions.timeList({ pk: this.props.pk})
                }}>
                    <Text>{this.props.name} </Text>
                </Button>
                    
            </View>

        )
    }
}

export default InterviewRoom;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});