import React, { useState } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


function Front() {

  const [global, setGlobal] = React.useState(true);

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
      {global ?
          <View style={{
            width: 150, height: 30, alignSelf: 'center', backgroundColor: '#B7E5E4', flexDirection: 'row', marginTop: 15
            , borderRadius: 6, justifyContent: 'space-between', padding: 5
          }}>
            <View style={{ marginLeft: 5, backgroundColor: '#F3AF8E', width: 50, height: 20, borderRadius: 6, alignItems: 'center' }}>
              <Text style={{}}>Global</Text>
            </View>
            <TouchableOpacity onPress={()=>setGlobal(false)}>
            <Text style={{ marginRight: 10 }}>Close Up</Text>
            </TouchableOpacity>
          </View> :
          <View style={{
            width: 150, height: 30, alignSelf: 'center', backgroundColor: '#B7E5E4', flexDirection: 'row', marginTop: 15
            , borderRadius: 6, justifyContent: 'space-between', padding: 5
          }}>
            <TouchableOpacity onPress={()=>setGlobal(true)}>
            <Text style={{}}>Global</Text>
            </TouchableOpacity>
            <View style={{ marginLeft: 5, backgroundColor: '#F3AF8E', width: 80, height: 20, borderRadius: 6, alignItems: 'center' }}>
              <Text style={{ marginRight: 10 }}>Close Up</Text>
            </View>
          </View>}

      </ScrollView>
    </View>
  )
}

export default Front;