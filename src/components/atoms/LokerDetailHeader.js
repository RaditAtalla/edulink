import { View, Image, Text, StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const LokerDetailHeader = ({ title, company, location, image}) => {
  return(
    <View style={Styles.container}>
      <Image style={Styles.image} source={image} />
      <View style={Styles.details}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.company}>{company}</Text>
        <Text style={Styles.location}>{location}</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: horizontalScale(12),
    alignItems: 'center',
  },
  image: {
    width: horizontalScale(68),
    objectFit: 'contain',
  },
  details: {
    gap: verticalScale(4),
  },
  title: {
    color: COLORS.textDark,
    fontSize: moderateScale(20),
    fontFamily: 'Satoshi-Bold',
  },
  company: {
    color: COLORS.primary,
    fontFamily: 'Satoshi-Medium',
  },
  location: {
    color: COLORS.textDark,
    fontFamily: 'Satoshi-Regular',
  }
})

export default LokerDetailHeader