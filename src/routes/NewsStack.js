import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BeasiswaNews, ListBeasiswa, ListNews, NewsPage } from "../views";
import { COLORS, moderateScale } from "../constant";

const Stack = createNativeStackNavigator()

const NewsStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerTintColor: COLORS.primary, headerTitleStyle: {color: COLORS.black, fontSize: moderateScale(20), fontFamily: 'Satoshi-Medium'}, headerShadowVisible: false}}>
      <Stack.Screen name="BeasiswaNews" component={BeasiswaNews} options={{ title: 'Detail Beasiswa'}} />
      <Stack.Screen name="ListBeasiswa" component={ListBeasiswa} options={{ title: 'Beasiswa'}} />
      <Stack.Screen name="ListNews" component={ListNews} options={{ title: 'News Sekolah'}} />
      <Stack.Screen name="NewsPage" component={NewsPage} options={{ title: 'Detail News Sekolah'}} />
    </Stack.Navigator>
  )
}

export default NewsStack