import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'



const LoginScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Image source={require('../Assests/bg.png')} style={styles.bg}/>
      </View>
      {/*  */}
      <Text style={{fontSize:23,fontWeight:'600',color:'black',marginVertical:40,textAlign:'center'}}>Login</Text>
      {/* fc btn */}
      <TouchableOpacity>
      <View style={styles.btnface}>
        <View style={{flexDirection:'row',gap:10,padding:6,alignSelf:'center'}}>
          <Image source={require('../Assests/facebook.png')} style={{width:30,height:30,}}/>
          <Text style={{color:'white',fontSize:17,fontWeight:'500'}}>Continue with Facebook</Text>
        </View>
      </View>
      </TouchableOpacity>
      {/*  Google btn*/}
      <TouchableOpacity>
      <View style={styles.btngoogle}>
        <View style={{flexDirection:'row',gap:10,padding:8,alignSelf:'center',}}>
          <Image source={require('../Assests/google.png')} style={{width:25,height:25,}}/>
          <Text style={{color:'#0466c8',fontSize:17,fontWeight:'500'}}>Continue with Google</Text>
        </View>
      </View>
      </TouchableOpacity>
      {/* input Section */}
        <TextInput
        style={styles.Input}
        placeholder='Email'
        placeholderTextColor={'#b7b7a4'}
        />
        <TextInput
        style={styles.Input}
        placeholder='Password'
        placeholderTextColor={'#b7b7a4'}
        />

        {/* Login btn */}
        <TouchableOpacity onPress={() => navigation.navigate('BottomNavigation')}>
        <View style={styles.loginbtn}>
          <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Login</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
        <Text style={{color:'black',textAlign:'center',fontWeight:'500'}}>Forgot your Password ?</Text>
        </TouchableOpacity>
        {/* footer */}
        <Text style={{color:'#016ee9',textAlign:'center',marginTop:70, fontWeight:'500'}}>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={{textAlign:'center',marginTop:5,color:'#76c893',fontSize:17,fontWeight:'500',textDecorationLine:'underline'}}>SignUp</Text>
        </TouchableOpacity>
      





    </View>
  )
}

export default LoginScreen

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
  btnface:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    alignItems:'center',
    backgroundColor:'#0466c8',
    borderColor:'#016ee9',
    alignSelf:'center'
  },
  btngoogle:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    alignItems:'center',
    backgroundColor:'white',
    borderColor:'white',
    alignSelf:'center',
    marginVertical:20,
  },
  Input:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    backgroundColor:'white',
    borderColor:'white',
    alignSelf:'center',
    marginVertical:10,
    paddingLeft:20,
    

  },
  loginbtn:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    alignItems:'center',
    backgroundColor:'#76c893',
    borderColor:'#76c893',
    alignSelf:'center',
    marginVertical:20,
    padding:5
  }
})