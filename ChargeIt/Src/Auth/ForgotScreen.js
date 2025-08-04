import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'



const ForgotScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Image source={require('../Assests/bg.png')} style={styles.bg}/>
      </View>
     {/* forgot password section */}
     <View style={styles.Section}>
      <Text style={{fontSize:22,fontWeight:'800',color:'#76c893',alignSelf:'center',marginBottom:10}}>Reset Password</Text>
      <Text style={{fontSize:15,color:'#b7b7a4',fontWeight:'500',alignSelf:'center',marginBottom:20}}>Enter your email address</Text>

      {/* textInput  */}
      <TextInput
             style={styles.Input}
             placeholder='Email'
             placeholderTextColor={'#b7b7a4'}
             />
             {/* reset btn */}
             <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
 <View style={styles.Resetbtn}>
          <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Reset Password</Text>
        </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default ForgotScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#e8f7ff',
    height:750,
    
  },
  header:{
    height:130,
    backgroundColor:'#016ee9',
    borderBottomLeftRadius:70,
    borderBottomRightRadius:70,
  },
  bg:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:70
  },
  Resetbtn:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    alignItems:'center',
    backgroundColor:'#76c893',
    borderColor:'#76c893',
    alignSelf:'center',
    marginVertical:40,
    padding:5
  },
  Section:{
    backgroundColor:'white',
    height:400,
    width:320,
    alignSelf:'center',
    borderRadius:30,
    marginTop:100,
    padding:10
  },
  Input:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    borderColor:'#76c893',
    alignSelf:'center',
    marginVertical:10,
    paddingLeft:20,
  
  }
})