import MyStatusbar from "../../components/atoms/MyStatusbar";
import { IMAGES, horizontalScale, COLORS } from "../../constant"
import { View, Image } from 'react-native'

const LandingPage = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('OnBoarding')
  }, 1000);
  return(
    <>
      <MyStatusbar contentColor='dark-content' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
        <Image source={IMAGES.logo} style={{ width: horizontalScale(406), objectFit: 'contain' }} />
      </View>
    </>
  )
}

export default LandingPage