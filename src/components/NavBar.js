import React, {Component} from 'react'
import {
  View, Text, StyleSheet, Image,TouchableOpacity,TextInput
} from 'react-native'
import {Header , Icon,Body, Left, Right, Drawer} from 'native-base'
import UserProfile from './UserProfile'

export default class NavBar extends Component{
    state={
        modalVisible: false,        
    }
    drawModal(){
        this.setState({modalVisible: true})
    }
    closeModal(){
        this.setState({modalVisible: false})
    }
    render(){
        return(
           <Header style={styles.navBar} >
                <Left >
                    <TouchableOpacity style={styles.homeNav} onPress={()=> this.drawModal()}>
                        <Icon name="menu" style={styles.homeIcon} />                  
                    </TouchableOpacity>
                </Left>
                <UserProfile visible={this.state.modalVisible} closeDraw={()=>this.closeModal()}/>
                <View style={styles.userProfile}>
                    <Icon name="search" style={styles.homeIcon}  />           
                </View>        
            </Header> 
        )
    }
}

const styles = StyleSheet.create({
  navBar:{    
    height: 40,
    width: 100 + '%',
    backgroundColor: '#3F8EFC',
    borderColor:'#FFF',
    flexDirection: 'row',    
    alignItems: 'center',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
   
  },
  homeNav:{
    flexDirection: 'row' ,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 3,
  },
  homeName:{
    fontSize: 15,    
    color: '#F3EFF5',
    paddingLeft: 3,
  },
  homeIcon:{
    color: '#FFF'
  },
  userProfile:{
    paddingRight: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userImage:{
    height: 20,
    width: 20,
    tintColor: '#F7F9F9',    
  }    
})
