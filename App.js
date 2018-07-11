import React, {Component} from 'react'
import {Spinner} from 'native-base'
import{
  StyleSheet, View,Text, Alert,TouchableOpacity,Image,ScrollView
} from 'react-native'

import {SpeechToText} from 'react-native-watson'
import Permissions from 'react-native-permissions'
import Header from'./src/components/Header'
import NavBar from'./src/components/NavBar'
import Services from'./src/components/Services'

export default class App extends Component{
  
  render(){
    return(
      <View style={styles.container}>
        <Header/>
        <NavBar/>        
        <Services/>
      </View>
    )
  }
}

  const styles = StyleSheet.create({ 
  container:{
      flex: 1,
  },
  showRecording:{
   alignSelf: 'center',
   marginVertical: 5,
   height: 100,
   width: 80 + '%',
   borderWidth: 2,
   borderRadius: 5,
   borderColor: '#5067FF'
},
  spinnerDisplay:{
    height: 20,
},
  txt:{
    padding: 5,
    fontSize: 15,
    color: '#5067FF'
  },
  txt1:{
    padding: 5,
    fontSize: 15,
    fontStyle: 'italic'
  },
  btn: {
       position: 'absolute',
       bottom: 20,
       right: 20,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#5067FF',
       width: 60,
       height: 60,
       borderRadius: 60
     },
  microphone:{
       height: 30,
       width: 30,
       tintColor: '#FFF',
       padding: 5,
       paddingLeft: 5,
       paddingBottom: 7
     },
  myList:{
       height: 50,
       borderColor: '#3B28CC',
       marginHorizontal: 5,
       flexDirection: 'row',
       paddingHorizontal: 5,
       alignItems: 'center',
       justifyContent:  'space-between',
       borderBottomWidth: StyleSheet.hairlineWidth,              
    },
  theContent:{
      flex: 4,
      fontSize: 15,
    },
  dateStyle:{ 
        flex: 1,        
        fontSize: 7,
        fontStyle: 'italic',
        fontWeight: 'bold',    
    },
  designView:{
      marginTop: 5,
      borderColor: '#5067FF',
      borderTopWidth: 2,
  }
})
