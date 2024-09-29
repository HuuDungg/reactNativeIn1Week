// In App.js in a new project
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const navigation: any = useNavigation();
  const handleClick = () => {
    navigation.navigate("Details", { id: 11 });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={handleClick} title='Go to details' />
    </View>
  );
}

function DetailScreens() {
  const route: any = useRoute();
  console.log("check route print id: ", route?.params?.id);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailScreens</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;