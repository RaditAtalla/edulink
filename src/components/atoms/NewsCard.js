import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const NewsCard = ({image, title, description, date, action}) => {
  return(
    <TouchableOpacity style={Styles.container} onPress={action}>
      <Image style={Styles.thumbnail} source={image} />
      <View style={Styles.textContainer}>
        <Text style={[Styles.title, Styles.text]} numberOfLines={2}>{title}</Text>
        <Text style={[Styles.description, Styles.text]} numberOfLines={3}>{description}</Text>
        <Text style={[Styles.date, Styles.text]}>{date}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    gap: horizontalScale(16),
    alignItems: 'flex-start',
    borderRadius: 8,
  },
  thumbnail: {
    width: horizontalScale(131),
    height: verticalScale(98),
    borderRadius: 4,
    objectFit: 'cover'
  },
  textContainer: {
    gap: verticalScale(8),
  },
  text: {
    width: '30%'
  },
  title: {
    color: COLORS.textDark,
    fontFamily: 'Satoshi-Bold',
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: moderateScale(10),
    fontFamily: 'Satoshi-Medium',
  },
  date: {
    color: COLORS.gray,
    fontSize: moderateScale(10),
    fontFamily: 'Satoshi-Medium'
  },
})

export default NewsCard