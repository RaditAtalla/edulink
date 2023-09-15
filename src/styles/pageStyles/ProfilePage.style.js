import { StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(32),
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(24),
    gap: verticalScale(28),
    marginTop: verticalScale(48),
  },
  sectionContainer: {
    gap: verticalScale(32),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: COLORS.textDark,
    fontSize: moderateScale(20),
    fontFamily: 'Satoshi-Bold',
  },
  expandButton: {
    height: verticalScale(24),
    objectFit: 'contain',
  },
})

export default Styles