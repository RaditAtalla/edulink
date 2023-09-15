import { View, StyleSheet } from 'react-native'
import { COLORS, horizontalScale, verticalScale } from '../../constant'

const Border = () => {
  return(
    <View style={Styles.border} />
  )
}

const Styles = StyleSheet.create({
  border: {
    width: '100%',
    height: 3,
    backgroundColor: COLORS.gray,
    borderRadius: 50,
  }
})

export default Border