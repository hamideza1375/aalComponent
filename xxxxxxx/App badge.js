import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Badge from './Components/Badge'
import Button from './Components/Button'



function App() {

  return (
    <SafeAreaView>

      <View style={{ marginTop: 99, zIndex:-1 }} >
        <View style={{ position: 'relative', width:94,alignSelf:'center' }} >
          <Badge text={"2"} />
          <Button style={styles.btn} >click</Button>
        </View>
      </View>

    </SafeAreaView>
  )
}



export default App;

const styles = StyleSheet.create({
  btn: {
    width: 80,
    alignSelf: 'center',
  },
})