import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage, LoginPage, Notifikasi, OnBoarding } from "../views";

const Stack = createNativeStackNavigator()

const NotifikasiStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="Notifkasi" component={Notifikasi} options={{ title: 'Notice' }} />
    </Stack.Navigator>
  )
}

export default NotifikasiStack