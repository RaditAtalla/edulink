import { StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    height: verticalScale(208),
    position: 'relative',
    paddingHorizontal: horizontalScale(24),
  },
  backgroundImage: {
    height: verticalScale(208),
    width: '100%',
    position: 'absolute',
  },
  titleContainer: {
    justifyContent: 'center',
    height: '100%',
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: moderateScale(26),
    fontFamily: 'Satoshi-Bold',
  },
  contentContainer: {
    paddingVertical: verticalScale(32),
    paddingLeft: horizontalScale(15),
    paddingRight: horizontalScale(33),
    gap: verticalScale(24),
  }
})

export default Styles