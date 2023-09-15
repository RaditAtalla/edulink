// Sementara gini dulu, nanti dipindahin ke file masing2 untuk pengelompokan routingan

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNav from "./TabNavigation";
import NewsStack from "./NewsStack";
import LandingStack from "./LandingStack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingStack" component={LandingStack} />
        <Stack.Screen name="TabNavigation" component={TabNav} />
        <Stack.Screen name="NewsStack" component={NewsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes