import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../constant'

const Styles = StyleSheet.create({
  lokerContainer: {
    paddingVertical: verticalScale(32),
    paddingHorizontal: horizontalScale(24),
    gap: verticalScale(32),
  }
})

export default Styles