import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default class About  extends Component  {
render(){
    return(
        <View style={styles.container}>
        <Text style={styles.TextStyle}>About Page</Text>
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

})
