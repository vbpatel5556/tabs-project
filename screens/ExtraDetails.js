import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExtraDetails = ({ route }) => {
  return (
    <View>
      <Text>{route.params.msg}</Text>
    </View>
  )
}

export default ExtraDetails
