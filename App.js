
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
import ContactScreen from './screens/contact';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'HOME' }}
        />

        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'SOBRE' }}
        />

        <Tab.Screen
          name="Contato"
          component={ContactScreen}
          options={{ title: 'CONTATO' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
