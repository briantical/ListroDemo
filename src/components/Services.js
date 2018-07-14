import React, {Component} from 'react'
import {Spinner} from 'native-base'
import{
  StyleSheet, View,Text, Alert,TouchableOpacity,Image,ScrollView
} from 'react-native'

import {SpeechToText, TextToSpeech} from 'react-native-watson'
import Permissions from 'react-native-permissions'
import Addition from './Addition'
import DisplayLists from './DisplayLists'

export default class Services extends Component{
     
  state={
    text:'...',
    recording: false,
    speaking: false,
    tasks:[
            'Finishing watson today: include the natural language, conversation features',
            'Read through the released documentation for React Native 0.56.0',
            'Finishing the UI clone for whatsApp',
            'My hepatitis B vaccination: scheduled for tomorrow ',
            'Going to the Bank. Make the monthly deposit',
            'visit ar.mak.ac.ug check your results',
            'Recalibration of the computer clock. Reconfigure the system',
            'Go a pick up Emma from the airport Its at 10: 00',
            'Looking forward to the next Premiere Ant Man',
        ],
    newEntry: [],
    modalVisible: false
  }

  startRecord(){
    console.log('recording')
    this.setState({recording:true})    
    SpeechToText.startStreaming((err, text)=>{
      if(!err){
        console.log(text)
        this.setState({text})
        this.changeList()        
      }
      console.log(err)
    })    
  }

  stopRecord(){
    this.add()
    console.log('stopped recoding')
    this.setState({recording:false})    
    SpeechToText.stopStreaming()
    this.setState({text: '...'})
    this.setState({modalVisible:false}) 
  }
  
  readout(statement){
      console.log('speaking')
      this.setState({speaking:true})
      TextToSpeech.synthesize( statement ).then(
        ()=>console.log('Speaking has started'),        
      ).catch((err)=>console.log('Speaking failed' + err))
  }
  
  componentDidMount(){
    this.checkPermission()

    SpeechToText.initialize('YOUR_IBM_SpeechToText_USERNAME', 'YOUR_PASSWORD')
    TextToSpeech.initialize('YOUR_IBM_TextToSpeech_USERNAME', 'YOUR_PASSWORD')
  }

  checkPermission(){
    const p = Permissions.check('microphone');
    console.log('permission check', p);
    if (p === 'authorized') return;
    this.requestPermission();
  }

  requestPermission(){
    const p = Permissions.request('microphone');
    console.log('permission request', p);
  }

  add(){   
    let newList = this.state.tasks    
    newList.unshift(this.state.newEntry)
    this.setState({tasks: newList})
  }
  
  changeList(){
      let myNewList = this.state.text        
      console.log(myNewList)
      this.setState({newEntry:  myNewList})
  }
  
  showModalDisplay(){
      this.setState({modalVisible: true})
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                this.state.tasks.map((task, index)=>(
                    <DisplayLists key={index} content={task} position={index + 1} readOut={()=>this.readout(task)}/>
                ))
            }          
            </ScrollView>        
        <Addition showModal={()=>this.showModalDisplay()} visibility={this.state.modalVisible} textDisplay={this.state.text} 
            srtRecord={()=>this.startRecord()} endRecord={()=>this.stopRecord()} stateRecord={this.state.recording}/>             
      </View>
    )
  }
}

  const styles = StyleSheet.create({ 
  container:{
      flex: 1,
  },  
})
