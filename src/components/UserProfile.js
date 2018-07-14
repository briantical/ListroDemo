import React,{Component} from 'react'
import {
  View, Text, StyleSheet, Image,TouchableOpacity,Modal
} from 'react-native'
import {Container, Header, Content, List, ListItem,Icon, Left, Body, Right, Switch, Thumbnail, Button,Footer} from 'native-base'

export default  (props)=>(
    <View  style={styles.full}>
        <Modal
            animationType="fade"
            transparent={true}            
            visible={props.visible}
            onRequestClose={() => {
                console.log('Drawer closed')
            }}
        >  
         <Container style={styles.container} >
           <Header style={styles.headerDetails}>
             <View style={styles.personalDetails}>
                <Text style={styles.nameDetails}>
                    LUTAAYA Brian Ivan                    
                </Text>
                <Text style={styles.emailDetails}>                    
                    lutbrianivan@gmail.com
                </Text>
             </View>
             <Right>
                <Thumbnail small source={require('../assets/Images/user.jpg')} />
             </Right>
           </Header>
           <Content showsVerticalScrollIndicator={false} style={styles.content}>
           <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#007AFF" }}>
                        <Icon active name="share" />
                    </Button>
                </Left>
                <Body>
                    <Text>Share</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
          </ListItem>  
          <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#FF9501" }}>
                        <Icon active name="settings" />
                    </Button>
                </Left>
                <Body>
                    <Text>Settings</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                    </Right>
          </ListItem>
          <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#00C853" }}>
                        <Icon active name="heart" />
                    </Button>
                </Left>
                <Body>
                    <Text>Rate Us</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
          </ListItem> 
          <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#007AFF" }}>
                        <Icon active name="information" />
                    </Button>
                </Left>
                <Body>
                    <Text>About</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
          </ListItem>
           <ListItem icon onPress={props.closeDraw}>
                <Left>
                    <Button style={{ backgroundColor: "#007AFF" }}>
                        <Icon active name="close" />
                    </Button>
                </Left>
                <Body>
                    <Text>Quit</Text>
                </Body>                
          </ListItem>
           <ListItem>
            <Text>All Rights Reserved. Briantical</Text>
        </ListItem>
        </Content>                                         
         </Container>        
        </Modal>  
    </View>
)
const styles = StyleSheet.create({
  content:{
      backgroundColor: '#FFF',
  },
  container:{
      marginTop: 50,      
      marginRight:30 + '%',
      backgroundColor: 'transparent',
  },
  headerDetails:{
      height: 50,      
      backgroundColor: '#3F8EFC',
      borderColor: '#FFF',
      borderTopRightRadius: 10,
      borderWidth: StyleSheet.hairlineWidth,
  },                    
  personalDetails:{
      width: 70 + '%',
      alignSelf: 'center',
  },
  nameDetails:{
      color: '#FFF',
      fontWeight: 'bold',
  },
  emailDetails: {
      color: '#FFF',
      fontStyle: 'italic',
      fontSize: 10,
  }
})