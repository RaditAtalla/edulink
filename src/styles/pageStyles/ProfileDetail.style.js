import {StyleSheet} from 'react-native';
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(32)
  },
  contentContainer: {
    marginTop: verticalScale(32),
    gap: verticalScale(48),
    paddingHorizontal: horizontalScale(24)
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
    fontSize: moderateScale(16),
    fontFamily: 'Satoshi-Medium',
  },
  buttonUnderlineContainer: {
    alignItems: 'center',
  },
  buttonUnderline: {
    width: horizontalScale(37),
    height: verticalScale(3),
    borderRadius: 50,
  },
});

export default Styles;
