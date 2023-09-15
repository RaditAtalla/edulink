import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ulangan } from "../views";

const Stack = createNativeStackNavigator()

const UlanganStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Ulangan" component={Ulangan} />
    </Stack.Navigator>
  )
}

export default UlanganStack