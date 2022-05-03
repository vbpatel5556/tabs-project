import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailsScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>{route.params.msg}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("ExtraDetailsScreen", {msg : "I am from Home Screen"})}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailsScreen

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