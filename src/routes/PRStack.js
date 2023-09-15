import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MateriPage, PRPage } from "../views";
import { moderateScale } from "../constant";

const Stack = createNativeStackNavigator()

const PRStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShadowVisible: false, headerTitleStyle: {fontSize: moderateScale(20), fontFamily: 'Satoshi-Medium'}}}>
      <Stack.Screen name="PRPage" component={PRPage} options={{ title: 'Pekerjaan Rumah' }} />
    </Stack.Navigator>
  )
}

export default PRStack