import React from 'react'
import { StyleSheet, Text, View, Image, Alert, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content,Button } from 'native-base';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');


import {Actions} from 'react-native-router-flux'

class InterviewTime extends React.Component {

    state ={
        isSelected:false,
        
    }


    


    render() {
        console.log("kwontaehyoung")
        console.log(this.props.name);

        var f_startTime = this.props.startTime.slice(11,16)
        var f_endTime = this.props.endTime.slice(11,16)

        

        return (
            <TouchableOpacity onPress={ () => {
                console.log(this.state.isSelected);
                this.setState({ isSelected: !this.state.isSelected})}}>
                <View style={ this.state.isSelected ? styles.selectedContents: styles.contents }>

                    <View style={[styles.timeBox]}>
                        <Text style={[styles.startTimeText]}>{f_startTime} ~</Text>
                        <Text style={[styles.endTimeText]}>{f_endTime}</Text>
                    </View>

                    <View style={ this.state.isSelected ? styles.isSelected: styles.isNotSelected }/>
                    <View style={[styles.intervieweeList]}>
                        <View>
                            <Text style={[styles.intervieweeListTop]}>
                                면접자
                            </Text>
                        </View>
                        <Text style={[styles.intervieweeText]}>{this.props.interviewee}</Text>
                        
                    </View>

                    { this.state.isSelected ? (
                        <View style={[styles.isSelectedBall]}>
                        <Text style= {styles.isSelectedBallText}>
                            ●
                        </Text>
                    </View>
                    ) : null }
                    
                </View>
            </TouchableOpacity>


        )
    }
}

export default InterviewTime;


const styles = StyleSheet.create({

    contents: {
        width: deviceWidth-80,
        
        alignItems: 'flex-start',
        flexDirection: "row",
        marginLeft:40,
        marginTop:10,
        marginBottom:10,
        //backgroundColor:'yellow'
        borderTopWidth: 5,
        borderLeftWidth:1,
        borderColor:"#fff"
    },

    selectedContents: {
        width: deviceWidth-80,
        
        alignItems: 'flex-start',
        flexDirection: "row",
        marginLeft:40,
        marginTop:10,
        marginBottom:10,
        //backgroundColor:'yellow'
        borderTopWidth: 5,
        borderLeftWidth:1,
        borderColor:"#ff5000"
    },

    timeBox: {
        flex:1.5,
        marginLeft:20,
        marginTop:20,
        marginBottom:20,
        
    },
    isNotSelected: {
        flex:0.1,
        backgroundColor: 'skyblue',
        width: 20,
        height:120
    },
    isSelected: {
        flex:0.1,
        backgroundColor: '#ff5000',
        width: 20,
        height:120
    },
    intervieweeList:{
        flex:5,
        //backgroundColor: 'green',
        height: 120,
        marginLeft: 20,
        marginTop: 20,
        
        
    },
    intervieweeListTop: {
        fontSize:20,
        color:"white",
        marginBottom:20
    },
    intervieweeText: {
        fontSize:30,
        color:"white"
    },
    intervieweeText2:{
        fontSize:15,
        color:"gray"
    },
    startTimeText: {
        fontSize:30,
        color:"white"
    },
    endTimeText: {
        fontSize:30,
        color:"white"
        
    },
    isSelectedBall: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    isSelectedBallText: {
        fontSize:80,
        color:"#ff5000"
    },
    isNotSelectedBallText: {
        fontSize:100,
        color:"skyblue"
    }
});


// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff'
//     }
// });