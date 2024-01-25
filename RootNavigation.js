import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Top from './Pages/Top';
import Left from './Pages/Left';
import Right from './Pages/Right';
import Front from './Pages/Front';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveBackgroundColor: '#3E6975',
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#1A3033',
                    borderRadius: 5,
                    height: 150,
                },
            }}
        >

            <Tab.Screen
                name="Top"
                component={Top}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={<Image source={require('./assets/image/Top.png')} style={{marginBottom:10}} />}
                            label="Top"
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Left"
                component={Left}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={<Image source={require('./assets/image/Left.png')}  style={{marginBottom:10}} />}
                            label="Left"
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Front"
                component={Front}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={<Image source={require('./assets/image/Front.png')}  style={{marginBottom:10}} />}
                            label="Front"
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Right"
                component={Right}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={<Image source={require('./assets/image/Right.png')}  style={{marginBottom:10}} />}
                            label="Right"
                        />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}

function TabIcon({ focused, icon, label }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {icon}

            <View style={{
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: '#F64A22',
                width: 30,
            }} />

            <Text
                style={{
                    color: 'white',
                    fontSize: focused ? 15 : 10,
                }}
            >
                {label}
            </Text>
        </View>
    );
}
