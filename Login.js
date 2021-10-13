import React,{Component} from 'react';
import { View, Text, StyleSheet,TextInput,TouchableHighlight } from 'react-native';
 
export default class Login  extends Component  {
render(){
    return(
        <View style={styles.container}>
        <Text style={styles.TextStyle}>Razo Pay</Text>
        <TextInput style={styles.TextInputStyle} placeholder='User Name' placeholderTextColor='green'>

        </TextInput>
        <TextInput style={styles.TextInputStyle} placeholder='Password' placeholderTextColor='green'>

        </TextInput>
        <TouchableHighlight style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle} >Login</Text>
        </TouchableHighlight>
        </View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#021b24'
  },
  TextStyle:{
      fontStyle:'italic',
      fontFamily:'Bodoni 72',
      color:'#fff',
      fontSize:50,
      fontWeight:'800',
      marginBottom:40,
  },
  TextInputStyle:{
      borderColor:'#fff',
      borderBottomWidth:1,
      height:50,
      width:'70%',
      paddingLeft:10,
      borderRadius:8,
      marginTop:20,
      color:'#fff'
  },
  buttonStyle:{
      width:'50%',
      height:55,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      borderRadius:16,
      marginTop:30,
  },
  buttonTextStyle:{
      fontSize:30,
      fontWeight:'bold',
      color:'#021b24',
     
      
  }
})
