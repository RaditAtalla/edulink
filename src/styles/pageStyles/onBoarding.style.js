import { StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    gap: verticalScale(64),
  },
  image: {
    width: horizontalScale(382),
    height: verticalScale(286),
    objectFit: 'contain',
  },
  content: {
    alignItems: 'center',
    gap: verticalScale(32),
    paddingHorizontal: horizontalScale(24),
  },
  title: {
    color: COLORS.textDark,
    fontSize: moderateScale(26),
    fontFamily: 'Satoshi-Bold',
  },
  description: {
    color: COLORS.gray,
    fontSize: moderateScale(18),
    fontFamily: 'Satoshi-Medium',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: horizontalScale(49),
  }
})

export default Styles