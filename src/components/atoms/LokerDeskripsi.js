import { View, Text, StyleSheet } from 'react-native'
import { COLORS, moderateScale, verticalScale } from '../../constant'

const LokerDeskripsi = ({description}) => {
  let number = 0
  return(
    <View style={Styles.container}>
      <Text style={Styles.title}>Deskripsi pekerjaan</Text>
      <Text style={Styles.subtitle}>Job description:</Text>
      {description.map(desc => {
        number++
        return(
          <Text style={Styles.desc} key={number}>{number}. {desc}</Text>
        )
      })}
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    gap: verticalScale(7),
  },
  title: {
    color: COLORS.black,
    fontSize: moderateScale(20),
    fontFamily: 'Satoshi-Bold',
  },
  subtitle: {
    color: COLORS.black,
    fontFamily: 'Satoshi-Medium',
  },
  desc: {
    color: COLORS.black,
    fontSize: moderateScale(12),
    fontFamily: 'Satoshi-Regular',
    flex: 1,
    flexWrap: 'wrap',
  }
})

export default LokerDeskripsi