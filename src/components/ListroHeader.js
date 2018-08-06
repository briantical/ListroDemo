import React from 'react'
import {
  View, Text, StyleSheet, Image
} from 'react-native'
import {Header} from 'native-base'
export default  ()=>(
    <Header style={styles.header}>
        <View style={styles.appTitle}>
             <Text style={styles.listroName}>LISTRO</Text>
        </View>
        <View style={styles.appIcon}>
            <Image style={styles.listroIcon} source={require('../assets/Icons/listroIcon.png')}/> 
        </View>    
    </Header>
)

const styles = StyleSheet.create({
  header:{    
    height: 50,
    width: 100 + '%',
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F8EFC',    
  },
  appTitle:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  listroName:{
    fontSize: 24,
    fontStyle: 'italic',
    color: '#F3EFF5',
  },
  appIcon:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  listroIcon:{
    height: 40,
    width: 40,
    tintColor: '#FFF'
  }
})
