import { StyleSheet } from 'react-native'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  cardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: horizontalScale(24),
    marginTop: verticalScale(70),
  },
  borderContainer: {
    paddingHorizontal: horizontalScale(24),
  },
  border: {
    height: 3,
    width: '100%',
    backgroundColor: COLORS.gray,
    marginTop: verticalScale(54)
  },
  newsContainer: {
    paddingHorizontal: horizontalScale(14),
    marginTop: verticalScale(32),
    marginBottom: verticalScale(10),
    gap: verticalScale(43),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(60),
  },
  buttonWrapper: {
    gap: verticalScale(8),
    alignItems: 'center',
  },
  buttonTitle: {
    color: COLORS.textDark,
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
  },
  buttonUnderlineContainer: {
    alignItems: 'center'
  },
  buttonUnderline: {
    width: horizontalScale(37),
    height: verticalScale(3),
    borderRadius: 50,
  },
  newsCardContainer: {
    gap: verticalScale(24),
  },
  circle: {
    position: 'absolute',
    zIndex: -1,
  },
  orange: {
    top: 100,
    right: 0,
  },
  blue: {
    bottom: 250,
    left: 0,
  },
})

export default Styles