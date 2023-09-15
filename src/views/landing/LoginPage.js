import { SafeAreaView, View, Text, Image } from 'react-native'
import Styles from '../../styles/pageStyles/LoginPage.styles'
import CtaButton from '../../components/atoms/CtaButton'
import InputField from '../../components/atoms/InputField'
import { COLORS, ICONS, IMAGES, moderateScale, verticalScale } from '../../constant'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import MyStatusbar from '../../components/atoms/MyStatusbar'


const handlePress = () => {
  navigation.navigate('TabNavigation')
}

const LoginPage = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return(
    <SafeAreaView style={Styles.container}>
    <MyStatusbar contentColor='dark-content' />
      <Image style={[Styles.circle, Styles.orange]} source={IMAGES.circleOrange} />
      <Image style={[Styles.circle, Styles.blue]} source={IMAGES.circleBlue} />
      <Text style={Styles.title}>Ayo Masuk{'\n'}Ke <Text style={Styles.brand}>Edulink!</Text></Text>
      <View style={Styles.bottomWrapper}>
        <View style={Styles.inputGroup}>
          <InputField label='Username' placeholder='Username' icon={ICONS.user} value={username} setValue={setUsername} />
          <InputField label='Password' placeholder='Password' icon={ICONS.password} isPassword={true} value={password} setValue={setPassword} />
        </View>
        <CtaButton vPadding={verticalScale(18)} text='Login' fSize={moderateScale(20)} fFamily='Satoshi-Bold' background={(username !== '' && password !== '') ? COLORS.primary : COLORS.gray} borderRadius={50} isDisabled={(username !== '' && password !== '') ? false : true} action={() => navigation.navigate('TabNavigation')} />
      </View>
    </SafeAreaView>
  )
}

export default LoginPage