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
})
