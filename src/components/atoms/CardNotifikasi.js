import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, ICONS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const CardNotifikasi = ({date, title, description}) => {
  return(
    <View style={Styles.container}>
      <View style={Styles.textContainer}>
        <Text>{date}</Text>
        <Text>{title}</Text>
        <Text numberOfLines={1}>{description}</Text>
      </View>
      <TouchableOpacity>
        <Image source={ICONS.closeButton} />
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    gap: verticalScale(16),
  },
  date: {
    color: COLORS.textSecondary,
  },
  title: {
    color: COLORS.black,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Bold',
  },
  description: {
    color: COLORS.black,
  },
  closeButton: {
    width: horizontalScale(24),
    objectFit: 'contain',
  }
})

export default CardNotifikasi