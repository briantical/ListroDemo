import React from 'react'
import {
  View, Text, StyleSheet, Image,TouchableOpacity,Modal
} from 'react-native'
import {Spinner, Icon} from 'native-base'

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
                                props.stateRecording ? (<Spinner color='#3F8EFC' />):( <Text style={styles.txt1} note>Record to make an entry...</Text>)
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
                            <Icon name="md-microphone" style={styles.microphone}/>          
                        </TouchableOpacity> 
                    </View> 
                </View>                    
            </View>      
           
                                                                     
        </Modal>  
    </View>
)

const styles = StyleSheet.create({   
    container:{         
        flex: 1,
        justifyContent: 'center',   
        padding: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 5,        
      },
    spinnerDisplay:{
        height: 20,
    },
    theMic:{
        alignItems:'center'
    },
     theLogo:{
        borderRadius: 5,
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
         borderRadius: 5,         
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
       backgroundColor: '#3F8EFC',
       width: 50,
       height: 50,
       borderRadius: 50,       
     },
     microphone:{             
       color: '#FFF',           
     },
})
