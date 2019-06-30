import React, { Component } from 'react';
import { AppRegistry, FlatList,Image, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Mangoes'},
            {key: 'Oranges'},
            {key: 'Oranges'},
            {key: 'Oranges'},
            {key: 'Oranges'},
            {key: 'Oranges'},
            {key: 'Oranges'},
            {key: 'Oranges'},
          ]}
          
          renderItem={({item}) =>
          
          <View style={styles.container1}>
            <Text style={styles.counter} >1</Text>
            <Image source={require('D:/Work/react-native/AwesomeProject/images/bitcoin1.png')} style={styles.image} />
        
            <View style={styles.inner}>
                <Text style={styles.headingText} >Bitcoin</Text>
                <Text style={styles.price1}>$6,980.25</Text>
            </View>
        </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    container1:{
        flex: 1,
        backgroundColor: '#33355A',
        flexDirection: 'row'
    },
    container2:{
        flex: 6,
        backgroundColor: '#333344',
        flexDirection: 'row'
    },
    price1:{
        color: '#FFFFFF'
    }
    ,
    inner:{
        margin: 20,
        flex: 2
    }
    ,
    counter:{
        flexWrap: "wrap",
        justifyContent: 'center',
        color: '#FFFFFF',
        marginLeft: 20,
        marginTop: 35
    },
    image:{
        marginLeft: 20,
        marginTop: 25,
        width: 40,
        height: 40,
        transform: [{ rotate: '-10deg' }]
    },
    headingText:{
        color: '#FFFFFF',
        fontSize: 20
    }

})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);