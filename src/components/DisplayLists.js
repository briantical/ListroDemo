import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

export default (props)=>(
  <View style={styles.myList}>
    <Text style={styles.theContent} onLongPress={props.readOut}>{props.position}.{props.content}</Text>    
  </View>
)

const styles = StyleSheet.create({ 
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
})
