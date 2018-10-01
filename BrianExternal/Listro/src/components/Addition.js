import React from 'react'
import {
  View, Text, StyleSheet, Image,TouchableOpacity
} from 'react-native'
import ModalDisplay from './ModalDisplay'

export default  (props)=>(
    <View>
        <TouchableOpacity                     
            style={styles.addbutton}
            onPress={props.showModal}
        >                        
            <Text style={styles.plus}>+</Text>                             
        </TouchableOpacity>
        <ModalDisplay popUpVisibility={props.visibility} recordedText={props.textDisplay} stRecord={props.srtRecord} enRecord={props.endRecord} stateRecording={props.stateRecord}/>
    </View>
)
const styles = StyleSheet.create({  
    addbutton: {
       position: 'absolute',
       right: 25,
       bottom: 30,    
       backgroundColor: '#3F8EFC',
       width: 60,
       height: 60,
       borderRadius: 50
     },
    plus:{
       fontSize: 40,
       color: '#FFF',
       alignSelf:'center',
     },
})
