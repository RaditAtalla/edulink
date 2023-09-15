// Disini isinya page yang punya bottom tab navigation (HomePage, ProfilePage, dsb)
// Masing-masing dari pages tsb akan punya file route masing-masing yang akan dipanggil disini

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import PRStack from "./PRStack";
import BiayaStack from "./BiayaStack";
import NotifikasiStack from "./NotifikasiStack";
import UlanganStack from "./UlanganStack";
import { COLORS, ICONS, horizontalScale, moderateScale, verticalScale } from "../constant";
import { Image } from "react-native";

const Tab = createBottomTabNavigator()

const TabNav = () => {
  return(
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName
        if(route.name === 'HomeStack') {
          iconName = focused ? ICONS.berandaActive : ICONS.berandaInactive
        } else if(route.name === 'PRStack') {
          iconName = focused ? ICONS.PRActive : ICONS.PRInactive
        } else if(route.name === 'BiayaStack') {
          iconName = focused ? ICONS.biayaActive : ICONS.biayaInactive
        } else if(route.name === 'NotifikasiStack') {
          iconName = focused ? ICONS.notifikasiActive : ICONS.notifikasiInactive
        } else if(route.name === 'UlanganStack') {
          iconName = focused ? ICONS.ulanganActive : ICONS.ulanganInactive
        }

        return <Image source={iconName} style={{ width: horizontalScale(24), height: verticalScale(24), objectFit: 'contain'}} />
      },
      headerShown: false,
      tabBarLabelPosition: 'below-icon',
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.gray,
      tabBarLabelStyle: { fontFamily: 'Satoshi-Medium', fontSize: moderateScale(12)},
      tabBarStyle: { paddingBottom: verticalScale(13), paddingTop: verticalScale(19), height: verticalScale(80) },
    })}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ tabBarLabel: 'Beranda' }} />
      <Tab.Screen name="PRStack" component={PRStack} options={{ tabBarLabel: 'PR' }} />
      <Tab.Screen name="BiayaStack" component={BiayaStack} options={{ tabBarLabel: 'Biaya' }} />
      <Tab.Screen name="NotifikasiStack" component={NotifikasiStack} options={{ tabBarLabel: 'Notifikasi' }} />
      <Tab.Screen name="UlanganStack" component={UlanganStack} options={{ tabBarLabel: 'Ulangan' }} />
    </Tab.Navigator>
  )
}

export default TabNav