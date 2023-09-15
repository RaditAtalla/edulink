import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage, LoginPage, Notifikasi, OnBoarding } from "../views";

const Stack = createNativeStackNavigator()

const NotifikasiStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifkasi" component={Notifikasi} />
    </Stack.Navigator>
  )
}

export default NotifikasiStack