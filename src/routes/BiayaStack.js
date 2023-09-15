import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Biaya, LandingPage, LoginPage, OnBoarding } from "../views";
import { StyleSheet } from "react-native";
import { horizontalScale } from "../constant";

const Stack = createNativeStackNavigator()

const BiayaStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="Biaya" component={Biaya} />
    </Stack.Navigator>
  )
}

const Styles = StyleSheet.create({
  header: {
    paddingLeft: horizontalScale(35) 
  }
})

export default BiayaStack