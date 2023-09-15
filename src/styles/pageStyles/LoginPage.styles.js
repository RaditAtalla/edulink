import { StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(24),
    gap: verticalScale(136),
    backgroundColor: COLORS.white
  },
  title: {
    color: COLORS.black,
    fontSize: moderateScale(48),
    fontFamily: 'Satoshi-Bold',
  },
  brand: {
    color: COLORS.primary
  },
  bottomWrapper: {
    gap: verticalScale(130),
  },
  inputGroup: {
    gap: verticalScale(32),
  },
  circle: {
    position: 'absolute',
    zIndex: -1
  },
  orange: {
    top: 0,
    right: 0,
  },
  blue: {
    bottom: 0,
    left: 0,
  },
})

export default Styles