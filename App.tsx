// In App.js in a new project
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
  const navigation: any = useNavigation();
  const handleClick = () => {
    navigation.navigate("DetailScreens", { id: 11 });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={handleClick} title='Go to details' />
    </View>
  );
}

function Setting() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>setting</Text>
    </View>
  );
}

function DetailScreens() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailScreens</Text>
    </View>
  );
}

function Utils() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Utils</Text>
    </View>
  );
}

const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Utils"
        component={Utils}
        options={{
          tabBarLabel: 'Utils',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppTab" component={AppTab} options={{ headerShown: false }} />
        <Stack.Screen name="DetailScreens" component={DetailScreens} options={{
          headerBackTitle: "ruturn",
          headerTitle: "HuuDung",
          headerRight: () => <Button title='Click' />
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;