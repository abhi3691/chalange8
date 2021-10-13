import React,{Component} from 'react'

import { View,Text,StyleSheet,Image,TouchableOpacity,TouchableHighlight } from 'react-native'

export default class DrawerContent extends Component{
render(){
    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}> 
            <View style={styles.profileIcon}>
                <Image style={styles.profileImage}
                source={require('../assets/logo.png')}></Image>
                
            </View>
            
            <View style={styles.infoView}>
            <Text style={styles.nameText}>Favaz</Text>
            <TouchableHighlight style={styles.GoldButton}>
            <Text style={styles.GoldText}>Gold</Text>
            </TouchableHighlight>
            </View>
            </View>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Home')}>Home</Text>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Profile')}>profile</Text>
              <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Records')}>Records</Text>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Refund and policies')}>Refund and policies</Text>
            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Settings')}>Settings</Text>

            <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('About Us')}>About Us</Text> 

           <Text style={styles.menu}
            onPress={()=> this.props.navigation.navigate('Help')}>Help</Text> 

            <View style={styles.BottomText}>
                <TouchableOpacity 
                onPress={()=> this.props.navigation.navigate('Login')}>
                <Text style={styles.LogoutButtonStyle}>Logout</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    menu:{
        fontSize:18,
        marginTop:10,
        marginLeft:10,
        color:'#021b24',
        fontWeight:'bold',
        borderBottomWidth:1,
        borderBottomColor:'#021b24',
        marginTop:30,
        paddingLeft:10

    },
    profileContainer:{
        height:'25%',
        width:'100%',
        flexDirection:'row',
        alignItems:'flex-start',
        backgroundColor:'#021b24',
        marginBottom:20,
    },
    profileIcon:{
        height:100,
        width:100,
        backgroundColor:'#021b24',
     
        marginTop:10,
        marginLeft:10
    },
    infoView:{
        marginLeft:10,
        width:'50%',
       alignItems:'flex-end',
       marginTop:20,
    

    },
    profileImage:{
        height:"100%",
        width:"100%"
    },
    nameText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:24,
        marginBottom:5,
        
        
        
   
    },
    GoldButton:{
        width:60,
        backgroundColor:'#d4af37',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16,
    },
    GoldText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#6b0700'
    },
    BottomText:{
        height:'15%',
        width:'100%',
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'center'
       
    },

    LogoutButtonStyle:{
        fontSize:18,
        fontWeight:'400',
        color:'#000',
       
 

    }


})