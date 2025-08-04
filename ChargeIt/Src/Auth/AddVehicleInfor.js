import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'



const AddVehicleInfor = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Image source={require('../Assests/bg.png')} style={styles.bg}/>
      </View>
     {/* start add information Section */}
     <View style={styles.Section}>
      <Image source={require('../Assests/multiply.png')} style={styles.multiply}/>
      <Text style={{fontSize:22,fontWeight:'800',color:'#76c893',alignSelf:'center',marginBottom:50}}>Add a Vehicle</Text>

      {/* textInput  */}
      <TextInput
             style={styles.Input}
             placeholder='Brand/Company'
             placeholderTextColor={'#b7b7a4'}
             />
              <TextInput
             style={styles.Input}
             placeholder='Model'
             placeholderTextColor={'#b7b7a4'}
             />
               <TextInput
             style={styles.Input}
             placeholder='Series'
             placeholderTextColor={'#b7b7a4'}
             />
             {/* save btn */}
             <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
 <View style={styles.Savebtn}>
          <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Save</Text>
        </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddVehicleInfor

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
  Savebtn:{
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
  multiply:{
    width:20,
    height:20,
    alignSelf:'flex-end',
    marginRight:10
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