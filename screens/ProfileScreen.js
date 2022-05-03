import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("DetailsScreen", {msg : "I am from Profile Screen"})}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container : {
    flex: 1
  },  
  btn : {
    backgroundColor : 'blue',
    width : '50%',
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: '50%'
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight : 'bold'
  }
})