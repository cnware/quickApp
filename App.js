import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class Blink2 extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1500);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.header2}>{display}</Text>
    );
  }
}
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.header2}>{display}</Text>
    );
  }
}

export default class FirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Blink text='Hello, my name is' />
        <Blink2 text='Cassandra Ware' />
        <Blink2 text='And this is a React Native App' />

      </View>
          <View id="top" style={{flex:2, flexDirection: 'row', justifyContent: 'flex-start', }}>
          <View  style ={{width: 60,height : 350, backgroundColor: 'lightgray' }} />
          <View style ={{width: 60,height : 350, backgroundColor: 'yellow' }} />
          <View style ={{width: 60,height : 350, backgroundColor: 'aqua' }} />
          <View style ={{width: 60,height : 350, backgroundColor: 'lawngreen' }} />
          <View style ={{width: 60,height : 350, backgroundColor: 'magenta' }} />
          <View style ={{width: 60,height : 350, backgroundColor: 'red' }} />
          <View style ={{width: 60,height : 350, backgroundColor: 'blue' }} />
        </View>

        <View id="middle" style ={{flex:0, flexDirection:'row',justifyContent: 'flex-start',}}>
          <View style ={{width: 60,height :20, backgroundColor: 'blue' }} />
          <View style ={{width: 60,height :20, backgroundColor: 'black' }} />
          <View style ={{width: 60,height :20, backgroundColor: 'magenta' }} />
          <View style ={{width: 60,height :20, backgroundColor: 'black' }} />
          <View style ={{width: 60,height :20, backgroundColor: 'aqua' }} />
          <View style ={{width: 60,height :20, backgroundColor: 'black' }} />
          <View style ={{width: 60,height :20, backgroundColor: 'lightgray' }} />
          </View>

        <View id="bottom" style={{flex:1, flexDirection: 'row',}}>
          <View style ={{width: 75,height :180, backgroundColor: 'steelblue' }} />
           <View style ={{width: 75,height :180, backgroundColor: 'white' }} />
           <View style ={{width: 75,height :180, backgroundColor: 'purple' }} />
           <View style ={{width: 160,height :180, backgroundColor: 'black' }} />

          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,

    flexDirection: 'column',
  },
  header:{
    fontSize: 50,
    color: 'blue',
    backgroundColor: 'yellow'
  },
  header2:{
    fontSize: 50,
    color: 'red',
    backgroundColor: 'black'

  },
})
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FirstApp);
