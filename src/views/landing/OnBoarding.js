import { Image, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { COLORS, IMAGES, horizontalScale, moderateScale, verticalScale } from '../../constant'
import Styles from '../../styles/pageStyles/onBoarding.style'
import CtaButton from '../../components/atoms/CtaButton'
import MyStatusbar from '../../components/atoms/MyStatusbar'

const OnBoarding = ({navigation}) => {
  return(
    <SafeAreaView style={Styles.container}>
    <MyStatusbar contentColor='dark-content' />
      <Image source={IMAGES.onBoarding} style={Styles.image} />
      <View style={Styles.content}>
        <Text style={Styles.title}>Selamat Datang!</Text>
        <Text style={Styles.description}>Edulink adalah aplikasi manajemen sekolah yang dimana dapat melihat semua aktivitas sekolah</Text>
      </View>
      <View style={Styles.buttonContainer}>
        <CtaButton vPadding={verticalScale(18)} background={COLORS.primary} fSize={moderateScale(20)} fFamily='Satoshi-Bold' text='Mulai' borderRadius={50} action={() => navigation.navigate('LandingStack', {screen: 'LoginPage'})} />
      </View>
    </SafeAreaView>
  )
}

export default OnBoarding