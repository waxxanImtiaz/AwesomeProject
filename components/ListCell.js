import React, { Component } from 'react'
import { View, Text,Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'

class ListCell extends Component {
   state = {
      email: '',
      password: ''
   }
  
   render() {
      return (
          // Try setting `flexDirection` to `column`.
    //   <View style={{flex: 1,flexDirection: 'row'}} >
    //     <Text style={styles.welcome} >1</Text>
    //     <Image source={require('D:/Work/react-native/AwesomeProject/images/bitcoin.jpg')} style={styles.image} />
        


      
    <View style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.welcome} >1</Text>
            <Image source={require('D:/Work/react-native/AwesomeProject/images/bitcoin.jpg')} style={styles.image} />
        
            <View style={styles.inner}>
            <Text style={styles.headingText} >Bitcoin</Text>
            <Text  >$6,980.25</Text>
            </View>
        </View>

        <View style={styles.container2}>
        
        </View>
    </View>


         )
   }
}
export default ListCell

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#333333'
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
    inner:{
        margin: 20,
        flex: 2
    }
    ,
    welcome:{
        flex: 1,
        flexWrap: "wrap",
        justifyContent: 'center',
        color: '#FFFFFF',
        marginLeft: 20,
        marginTop: 20
    },
    image:{
        marginLeft: 20,
        marginTop: 10,
        width: 70,
        height: 70
    },
    headingText:{
        color: '#FFFFFF',
        fontSize: 20
    }

 })
  // ,
  //   "android-windows": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android"
  // }