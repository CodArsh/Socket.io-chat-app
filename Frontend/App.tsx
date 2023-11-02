import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Message from './screens/Message';
import GlobalState from './context';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GlobalState>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator>
          {/* all screens are here */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Message"
            component={Message}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
};

export default App;

const styles = StyleSheet.create({});
