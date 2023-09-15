import { StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: COLORS.primary,
    height: verticalScale(208),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    width: '100%'
  },
  backgroundImg: {
    height: '100%',
    objectFit: 'contain',
    paddingTop: verticalScale(37),
  },
  title: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: moderateScale(26),
    fontFamily: 'Satoshi-Bold',
  },
  content: {
    paddingTop: verticalScale(103),
    paddingHorizontal: horizontalScale(24),
    gap: verticalScale(32),
  }
})

export default Styles