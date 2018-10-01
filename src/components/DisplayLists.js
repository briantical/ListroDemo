import React,{Component} from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Left, Right,CheckBox } from 'native-base'

export default class DisplayLists extends Component{
    constructor(props){
        super(props)
        this.state={
            isChecked: false
        }
    }
    check(){        
        this.setState({isChecked: this.state.isChecked ? false : true })
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
    }
    
    
  render(){
    return(
        <Card style={styles.card}>
            <Left style={[styles.position,{borderLeftColor: this.getRandomColor()}]}>
                <CardItem>        
                    <Text style={styles.positionText}>
                        {this.props.position}
                    </Text>
                </CardItem>
             </Left>
             <Body style={styles.theList}>
                 <CardItem>
                    <Text style={styles.theContent} onLongPress={this.props.readOut}>
                        {(this.props.content.length <= 60) ? this.props.content :    this.props.content.slice(0, 60) + ' ...'}
                    </Text>
                </CardItem>
            </Body>
            <Right style={styles.finished}>
                <CheckBox style={styles.pend} checked={this.state.isChecked} color="#3F8EFC" onPress={()=>this.check()}/>        
            </Right>                        
          </Card>
    )
    }
}


const styles = StyleSheet.create({ 
    card:{       
       height: 60,       
       paddingHorizontal:5,
       marginHorizontal:10,
       flexDirection: 'row',              
    },
    theContent:{      
      fontSize: 15,
      fontStyle: 'italic',
      alignSelf: 'center',
    },
    position:{
        flex: 1,
        height: 90 + '%',
        borderLeftWidth: 5,       
    },
    positionText:{      
        color: '#904FC2',
        fontSize: 8,
        fontStyle: 'italic',        
        color: '#3F8EFC',
        alignSelf: 'center',
    },
    theList:{                
        flex: 5,        
    },
    finished:{
        flex: 1,        
    },
    pend:{
      alignSelf: 'center',
    },
})
