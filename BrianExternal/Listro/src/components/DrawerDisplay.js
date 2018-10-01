import React, {Component} from 'react'
import {Spinner} from 'native-base'
import{
  StyleSheet, View,Text,DrawerLayoutAndroid
} from 'react-native'

import {SpeechToText} from 'react-native-watson'
import Permissions from 'react-native-permissions'
import ListroHeader from'./ListroHeader'
import NavBar from'./NavBar'
import Services from'./Services'
import DrawerInfo from'./DrawerInfo'

export default class DrawerDisplay extends Component{
  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer() {
    this.drawer.openDrawer();
  }


  render(){
      var navigationView = (<DrawerInfo/>);
    return(
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref={(_drawer) => {
          this.drawer = _drawer;          
        }}
        >
            <ListroHeader/>
            <NavBar pressMe={this.openDrawer}/>        
            <Services/>
      </DrawerLayoutAndroid>
    )
  }
}

  const styles = StyleSheet.create({ 
  container:{
      flex: 1,
  },  
})
