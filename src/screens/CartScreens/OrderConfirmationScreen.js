import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

const OrderConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OrderConfirmationScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default OrderConfirmationScreen;