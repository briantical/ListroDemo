import React from 'react'
import {
  View, Text, StyleSheet, Image,TouchableOpacity
} from 'react-native'

export default  ()=>(    
    <View style={styles.navBar}>
        <TouchableOpacity style={styles.homeNav}>
             <Image style={styles.homeIcon} source={require('../assets/Icons/menu.png')}/> 
             <Text style={styles.homeName}>Home</Text>
        </TouchableOpacity>
        <View style={styles.userProfile}>
            <Image style={styles.userImage} source={require('../assets/Images/user.jpg')}/> 
        </View>        
    </View>
)

const styles = StyleSheet.create({
  navBar:{    
    height: 40,
    width: 100 + '%',
    flexDirection: 'row',
    backgroundColor: '#3F8EFC',
    alignItems: 'center',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
   
  },
  homeNav:{
    flexDirection: 'row' ,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 3,
    borderColor: '#FFF',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  homeName:{
    fontSize: 15,    
    color: '#F3EFF5',
    paddingLeft: 3,
  },
  homeIcon:{
    height: 25,
    width: 25,
    tintColor: '#FFF'
  },
  userProfile:{    
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userImage:{
    height: 30,
    width: 30,
    borderRadius: 30,
    borderColor:'#F3EFF5',
    borderWidth: StyleSheet.hairlineWidth,
  }    
})
