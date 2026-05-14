import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList, TabParamList } from './types/navigation';

import login from './login';
import dashboard from './dashboard';
import perfil from './perfil';
import explorar from './explorar';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator({ route }: any) {
  const userName =
    route?.params?.userName || 'Voluntário';

  const voluntarioId =
    route?.params?.voluntarioId || 'ID-0';

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#6A3093',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 70,
        },

        // nao tava funcionando com o codigo do arquivo pet
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: any;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'Explorar') {
            iconName = focused ? 'search' : 'search-outline';
          } 
          else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={dashboard}
        initialParams={{ userName, voluntarioId }}
      />

      <Tab.Screen
        name="Explorar"
        component={explorar as any}
        initialParams={{ userName, voluntarioId }}
      />

      <Tab.Screen
        name="Perfil"
        component={perfil}
        initialParams={{ userName, voluntarioId }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="login"
        component={login}
      />

      <Stack.Screen
        name="dashboard"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}