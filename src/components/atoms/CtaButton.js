import { TouchableOpacity, Text, View } from 'react-native'
import { COLORS, moderateScale, verticalScale } from '../../constant'

const CtaButton = ({ text, background, action, isDisabled, borderRadius, fFamily, fSize, vPadding }) => {
  return(
    <TouchableOpacity style={{ backgroundColor: background, paddingVertical: vPadding, borderRadius: borderRadius, width: '100%' }} onPress={action} disabled={isDisabled} >
      <Text style={{ fontFamily: fFamily, fontSize: fSize, color: COLORS.white, textAlign: 'center' }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CtaButton