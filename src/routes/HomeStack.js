// HomePage - LokerPage, ProfilePage, NewsPage
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage, LokerDetail, LokerPage, MateriPage, ProfileDetail, ProfilePage } from "../views";
import { COLORS, moderateScale } from "../constant";

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerTintColor: COLORS.primary, headerTitleStyle: {color: COLORS.black, fontSize: moderateScale(20), fontFamily: 'Satoshi-Medium'}, headerShadowVisible: false}}>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false}} />
      <Stack.Screen name="LokerPage" component={LokerPage} options={{ title: 'Lowongan Pekerjaan'}} />
      <Stack.Screen name="LokerDetail" component={LokerDetail} options={{ title: 'Lowongan Pekerjaan'}} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} options={{ title: 'Profile Detail'}} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile'}} />
      <Stack.Screen name="MateriPage" component={MateriPage} options={{ title: 'Materi'}}  />
    </Stack.Navigator>
  )
}

export default HomeStack