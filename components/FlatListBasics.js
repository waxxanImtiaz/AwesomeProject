import React, { Component } from 'react';
import { AppRegistry, FlatList,Image, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  
    
    index = 0;
    constructor(props){
        super(props);
        
    }
    render() {

    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Bitcoin'},
            {key: 'Etherium'},
            {key: 'Etherium'},
            {key: 'Etherium'},
            {key: 'Etherium'},
            {key: 'Etherium'},
            {key: 'Etherium'},
            {key: 'Etherium'},
          ]}
          
          renderItem={({item}) =>
          

          <View style={{flex: 1,backgroundColor: '#33355A',flexDirection: 'row'}}>
          

            <Text style={styles.counter} >{++this.index}</Text>
            <Image source={require('D:/Work/react-native/AwesomeProject/images/bitcoin1.png')} style={styles.image} />
        
            <View style={styles.inner}>
                <Text style={{color: '#FFFFFF',fontSize: 15}}   >Bitcoin</Text>

                <View style={{flex: 1, backgroundColor: '#33355A',flexDirection: 'row'}}>
                    <Text style={{color: '#90a4ae'}}>$6,980.25</Text>
                    <Text style={{color: '#795548', textAlign: 'center'}}>(-1.02)</Text>
                </View>
               
            </View>
            <View style={{flex: 1,marginTop: 25,backgroundColor: '#33355A'}}>
                    <Text style={{color: '#FFFFFF'}}>$135.96 B</Text>
                    <Text style={{color: '#90a4ae', textAlign: 'center'}}>$8.79</Text>
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
    
    inner:{
        margin: 20,
        flex: 2
    }
    ,
    counter:{
        flexWrap: "wrap",
        justifyContent: 'center',
        color: '#90a4ae',
        marginLeft: 20,
        marginTop: 35
    },
    image:{
        marginLeft: 20,
        marginTop: 25,
        width: 40,
        height: 40,
        transform: [{ rotate: '-10deg' }]
    }

})

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);