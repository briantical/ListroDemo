import React from 'react'
import {
  View, Text, StyleSheet, Image,TouchableOpacity,Modal
} from 'react-native'
import {Spinner} from 'native-base'

export default  (props)=>(
    <View >
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.popUpVisibility}
            onRequestClose={() => {
                alert('Done Recording');
            }}
        >  
            <View style={styles.container}>
               <View style={styles.theLogo}>
                    <Image style={styles.theLogoIcon} source={require('../assets/Icons/listroIcon.png')}/>
                </View>
                <View style={styles.textDisplay}>
                    <View>
                        <Text style={styles.theText}>{props.recordedText}</Text>
                        <View style={styles.spinnerDisplay}>
                        { 
                            props.stateRecording ? (<Spinner color='blue' />):( <Text style={styles.txt1} note>Record to make an entry...</Text>)
                        }
                </View>
                    </View>
                </View>
                <View style={styles.theMic}>
                    <View>                
                        <TouchableOpacity 
                            style={styles.btn}
                            onPressIn={props.stRecord}
                            onPressOut={props.enRecord}
                        >            
                            <Image style={styles.microphone} source={require('../assets/Icons/microphone.png')}/>          
                        </TouchableOpacity> 
                    </View> 
                </View>                    
            </View>                
        </Modal>  
    </View>
)

const styles = StyleSheet.create({  
    container:{  
        marginTop: 150,
        marginHorizontal: 10,
        height: 200,    
        justifyContent: 'center',   
        padding: 20,
        backgroundColor: '#E7E7E7',
        borderRadius: 5
      },
    spinnerDisplay:{
        height: 20,
    },
    theMic:{
        alignItems:'center'
    },
     theLogo:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#3F8EFC',
        flexDirection: 'row',
        paddingRight: 5,
     },
     theLogoIcon:{
        tintColor: '#FFFFFF',    
        height: 25,
        width: 25,
     },
     textDisplay:{     
         margin: 5,
         height: 100,
         padding: 5,
         backgroundColor: '#FFFFFF',
         borderColor: '#507578',
         borderWidth: StyleSheet.hairlineWidth,     
     },
    theText:{
        color: '#3B28CC',
        fontSize: 15,
        fontStyle: 'italic',
    },
     btn: {       
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#3B28CC',
       width: 50,
       height: 50,
       borderRadius: 50
     },
     microphone:{
       height: 40,
       width: 40,
       tintColor: '#FFF',
       padding: 5,
       paddingLeft: 5,
       paddingBottom: 7
     },
})
