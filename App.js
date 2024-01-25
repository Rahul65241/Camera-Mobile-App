import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Top from './Pages/Top';
import Left from './Pages/Left';
import Right from './Pages/Right';
import Front from './Pages/Front';
import MyTabs from './RootNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ title: 'MyTabs' }}
        />

        <Stack.Screen
          name="Top"
          component={Top}
          options={{ title: 'Top' }}
        />
        <Stack.Screen
          name="Left"
          component={Left}
          options={{ title: 'Left' }}
        />
        <Stack.Screen
          name="Front"
          component={Front}
          options={{ title: 'Front' }}
        />
        <Stack.Screen
          name="Right"
          component={Right}
          options={{ title: 'Right' }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
