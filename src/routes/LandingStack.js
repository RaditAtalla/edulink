import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage, LoginPage, OnBoarding } from "../views";

const Stack = createNativeStackNavigator()

const LandingStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  )
}

export default LandingStack