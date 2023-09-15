import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const CardButton = ({ icon, text1, text2, action }) => {
  return(
    <TouchableOpacity style={Styles.container} onPress={action}>
      <Image source={icon} style={Styles.icon} />
      <Text style={Styles.text}>{text1}{'\n'}{text2}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(32),
    paddingHorizontal: horizontalScale(26),
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    gap: verticalScale(16),
  },
  icon: {
    height: verticalScale(35),
    objectFit: 'contain'
  },
  text: {
    color: COLORS.textDark,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
    textAlign: 'center',
  }
})

export default CardButton