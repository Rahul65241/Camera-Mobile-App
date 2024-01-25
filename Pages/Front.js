import React from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


function Front() {
  return (
    <View style={{ flex: 1, backgroundColor: '#3E6975' }}>
      <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: width * 0.15 }}>
        <Text style={{ fontWeight: "bold", color: 'white', fontSize: 16, marginLeft: 10 }}>Wade Warren</Text>
        <View style={{
          width: 50, height: 30, backgroundColor: '#838383', alignItems: 'center',
          borderRadius: 10, padding: 5, marginRight: 10
        }}>
          <Text>End</Text>
        </View>
      </View>
      <View style={{ width: 317, height: 452, backgroundColor: '#B7E5E4', alignSelf: 'center', marginTop: 25, borderRadius: 12 }}>
        <Image source={require('../assets/image/Front2.png')} style={{ alignSelf:'center', marginTop: width*0.15 }} />
      </View>
      </ScrollView>
    </View>
  )
}

export default Front;